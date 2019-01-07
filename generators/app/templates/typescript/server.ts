import * as express from 'express';
import * as mongoose from 'mongoose';
import middlewares from './config/express';
import dbConfig from './config/db';
import appRoutes from './routes/index';


const app: express.Express = express();

middlewares(app);
appRoutes(app);
dbConfig(mongoose)



app.listen(3000, () => {
    console.log(`App run in port: ${3000}`)
})







