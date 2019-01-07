const yeomanEnv = require('yeoman-environment');
const CLI_NAME = 'node-create-boilerplate';
const commands = require('./commands');
const createYeomanEnv = () => {
    const env = yeomanEnv.createEnv();
    /* Register yeoman generators */
    commands.forEach(generator => {
        env.register(require.resolve(`../generators/${generator}`), `${CLI_NAME}:${generator}`);
    });
    return env;
};


module.exports = {
    createYeomanEnv,
    CLI_NAME
}