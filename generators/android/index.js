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
        this.log(
            yosay(`${chalk.blue('Android')}`)
        );

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
            // const { hasModel, modelName } = props;
            // if (hasModel && modelName) {
            //     props['modelNameCapitalized'] = `${modelName.charAt(0).toUpperCase()}${modelName.substr(1)}`;
            // }
            /** @type {String} */
            const { model } = props;
            props['Model'] = `${model.charAt(0).toUpperCase()}${model.substr(1)}`;
            props['model'] = `${model.charAt(0).toLowerCase()}${model.substr(1)}`;
            this.props = props;
        });
    }

    writing() {

        let { model, Model } = this.props;
        const gradleData = this.fs.read(this.destinationPath('app/build.gradle'))
        const appId = getAppId(gradleData);
        this.props = { ...this.props, appId };
        let globalPath = `app/src/main/java/${appId.split('.').join(path.sep)}`;
        let resourcesPath = `app/src/main/res`;
        // type = type.toLowerCase();
        // let ext = ~['javascript', 'babel'].indexOf(type) ? 'js' : 'ts';



        // `${this.templatePath()}/js/**/!(_)*`
        // this.fs.copyTpl(
        //     `${this.templatePath()}/**/!(_)*`,
        //     this.destinationPath(),
        //     this.props
        // )


        /** @Models
         * 
         */
        // if (hasModel && modelName) {
            this.fs.copyTpl(
                this.templatePath(`model/_model.java`),
                this.destinationPath(`${globalPath}/model/${Model}.java`),
                this.props
            );
        // }

        /** @Controller
         * 
         */
        this.fs.copyTpl(
            this.templatePath(`activity/_activity.java`),
            this.destinationPath(`${globalPath}/activity/${Model + 'Activity'}.java`),
            this.props
        )


        /** @Services
         * 
         */

        this.fs.copyTpl(
            this.templatePath(`adapter/_adapter.java`),
            this.destinationPath(`${globalPath}/adapter/${Model + 'RVAdapter'}.java`),
            this.props
        )

        /** @Routes
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

    // install() {
    //     this.installDependencies({
    //         npm: false,
    //         bower: false
    //     });
    // }
    
};
