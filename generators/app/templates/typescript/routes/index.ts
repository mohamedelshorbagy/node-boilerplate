
import { Express } from 'express';

import <%= serviceName %>Routes from './<%= serviceName %>';

export default (app: Express) => {
    app.use('/api/<%= serviceName %>', <%= serviceName %>Routes);

}

