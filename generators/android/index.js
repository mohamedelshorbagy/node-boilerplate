'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

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
                this.destinationPath(`model/${Model}.java`),
                this.props
            );
        // }

        /** @Controller
         * 
         */
        this.fs.copyTpl(
            this.templatePath(`activity/_activity.java`),
            this.destinationPath(`activity/${Model + 'Activity'}.java`),
            this.props
        )


        /** @Services
         * 
         */

        this.fs.copyTpl(
            this.templatePath(`adapter/_adapter.java`),
            this.destinationPath(`adapter/${Model + 'RVAdapter'}.java`),
            this.props
        )

        /** @Routes
         * 
         */

        // this.fs.copyTpl(
        //     this.templatePath(`${type}/routes/_route.${ext}`),
        //     this.destinationPath(`routes/${serviceName}.${ext}`),
        //     this.props
        // )



    }

    // install() {
    //     this.installDependencies({
    //         npm: false,
    //         bower: false
    //     });
    // }
    
};
