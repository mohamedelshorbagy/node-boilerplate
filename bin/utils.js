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
/**
 * 
 * @param {String} data - gradle file data
 * @returns {String} - Gradle Application Name 
 */
const getAppId = (data) => {
    let strings = data.split('\n');
    let appIdFiltered = strings.filter(it => {
        return !!new RegExp(/applicationId/ig).test(it);
    });
    if(appIdFiltered && appIdFiltered.length) {
        let appId = appIdFiltered[0];
        return appId ? appId.replace(/applicationId/ig, '').replace(/"/ig, '').trim() : null;
    }

    return null;
}



module.exports = {
    createYeomanEnv,
    CLI_NAME,
    getAppId
}