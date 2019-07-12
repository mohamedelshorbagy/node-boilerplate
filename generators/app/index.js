'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        // this.log(
        //     yosay(`${chalk.blue('Node MVC')}`)
        // );

        const prompts = [
            {
                type: 'input',
                name: 'dbName',
                message: 'DB Name:',
                default: 'users'
            },
            {
                type: 'input',
                name: 'serviceName',
                message: 'Service Name:',
                default: 'user'
            },
            {
                type: 'confirm',
                name: 'hasModel',
                message: 'do you want a mongodb model?',
                default: false
            },
            {
                when: function (response) {
                    return response.hasModel
                },
                type: 'input',
                name: 'modelName',
                message: 'Model Name:',
                default: 'user'
            },
            {
                type: 'confirm',
                name: 'dockerFile',
                message: 'Add Dockerfile?',
                default: true
            },
            {
                type: 'list',
                name: 'type',
                message: 'Javascript Environemnt',
                choices: ['Javascript', 'Babel', 'Typescript'],
                default: 'Javascript',
                filter: (val) => {
                    return val.toLowerCase()
                }
            }
        ];

        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            const { hasModel, modelName } = props;
            if (hasModel && modelName) {
                props['modelNameCapitalized'] = `${modelName.charAt(0).toUpperCase()}${modelName.substr(1)}`;
            }

            this.props = props;
        });
    }

    writing() {

        let { serviceName, hasModel, modelName, type, dockerFile } = this.props;

        type = type.toLowerCase();
        let ext = ~['javascript', 'babel'].indexOf(type) ? 'js' : 'ts';



        // `${this.templatePath()}/js/**/!(_)*`
        this.fs.copyTpl(
            `${this.templatePath()}/${type}/**/!(_)*`,
            this.destinationPath(),
            this.props
        )


        /** @Package
         * 
         */
        this.fs.copyTpl(
            this.templatePath(`${type}/_package.json`),
            this.destinationPath(`package.json`),
            this.props
        );



        /** @Models & DB
         * 
         */
        if (hasModel && modelName) {
            this.fs.copyTpl(
                this.templatePath(`${type}/app/models/_model.${ext}`),
                this.destinationPath(`app/models/${modelName}.${ext}`),
                this.props
            );

            this.fs.copyTpl(
                this.templatePath(`${type}/config/_db.${ext}`),
                this.destinationPath(`config/db.${ext}`),
                this.props
            );

        }

        /** @Controller
         * 
         */
        this.fs.copyTpl(
            this.templatePath(`${type}/app/controllers/_ctrl.${ext}`),
            this.destinationPath(`app/controllers/${serviceName}.${ext}`),
            this.props
        )


        /** @Services
         * 
         */

        this.fs.copyTpl(
            this.templatePath(`${type}/app/services/_service.${ext}`),
            this.destinationPath(`app/services/${serviceName}.${ext}`),
            this.props
        )

        /** @Routes
         * 
         */

        this.fs.copyTpl(
            this.templatePath(`${type}/routes/_route.${ext}`),
            this.destinationPath(`routes/${serviceName}.${ext}`),
            this.props
        )


        /** @DockerFile
         * 
         * 
         */
        if (dockerFile) {
            this.fs.copy(
                this.templatePath('_Dockerfile'),
                this.destinationPath('Dockerfile')
            );
        }


    }

    install() {
        this.installDependencies({
            npm: true,
            bower: false
        });
    }

};
