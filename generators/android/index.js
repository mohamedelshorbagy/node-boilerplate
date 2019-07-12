'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('fs');
const { getAppId } = require('../../bin/utils')
const path = require('path');
module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        // this.log(
        //     yosay(`${chalk.blue('Android')}`)
        // );

        const prompts = [
            {
                type: 'input',
                name: 'model',
                message: 'Model Name: ',
                default: 'User'
            }
        ];

        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            const { model } = props;
            props['Model'] = `${model.charAt(0).toUpperCase()}${model.substr(1)}`;
            props['model'] = `${model.charAt(0).toLowerCase()}${model.substr(1)}`;
            this.props = props;
        });
    }

    writing() {

        let { model, Model } = this.props;
        const gradleData = this.fs.read(this.destinationPath('app/build.gradle'))
        let mainfaistFile = this.fs.read(this.destinationPath('app/src/main/AndroidManifest.xml'));
        const appId = getAppId(gradleData);
        this.props = { ...this.props, appId };
        let globalPath = `app/src/main/java/${appId.split('.').join(path.sep)}`;
        let resourcesPath = `app/src/main/res`;



        /** @Models
         * 
         */
        this.fs.copyTpl(
            this.templatePath(`model/_model.java`),
            this.destinationPath(`${globalPath}/model/${Model}.java`),
            this.props
        );

        /** @Activity
         * 
         */
        this.fs.copyTpl(
            this.templatePath(`activity/_activity.java`),
            this.destinationPath(`${globalPath}/activity/${Model + 'Activity'}.java`),
            this.props
        )
        /**
         * @Update AndroidManifest File to add new Activity
         */
        mainfaistFile = mainfaistFile.split('\n');
        let idx = mainfaistFile.findIndex(it => !!new RegExp(/<\/application>/ig).test(it));
        mainfaistFile.splice(idx, 0, `\t\t<activity android:name=".activity.${Model + 'Activity'}"/>`);
        let newData = mainfaistFile.join('\n')
        fs.writeFileSync(`${this.destinationPath('app/src/main/AndroidManifest.xml')}`, newData);


        /** @Adapters
         * 
         */

        this.fs.copyTpl(
            this.templatePath(`adapter/_adapter.java`),
            this.destinationPath(`${globalPath}/adapter/${Model + 'RVAdapter'}.java`),
            this.props
        )

        /** @XML Files
         * 
         */

        this.fs.copyTpl(
            this.templatePath(`layout/_item.xml`),
            this.destinationPath(`${resourcesPath}/layout/${model}_item.xml`),
            this.props
        )


        this.fs.copyTpl(
            this.templatePath(`layout/_list.xml`),
            this.destinationPath(`${resourcesPath}/layout/${model}_activity.xml`),
            this.props
        )



    }
    
};
