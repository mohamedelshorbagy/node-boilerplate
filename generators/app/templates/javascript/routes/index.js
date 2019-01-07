const <%= serviceName %>Routes = require('./<%= serviceName %>');


module.exports = function (app) {

    app.use('/api/<%= serviceName %>', <%= serviceName %>Routes);

}
