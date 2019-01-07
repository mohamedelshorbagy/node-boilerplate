import <%= serviceName %>Routes from './<%= serviceName %>';

export default (app) => {
    app.use('/api/<%= serviceName %>', <%= serviceName %>Routes);

}


