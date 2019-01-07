import * as express from 'express';
import * as mongoose from 'mongoose';
import Config from './config/config';
import expressMiddlewares from './config/express';
import dbInit from './config/db';
import appRoutes from './routes/index';

const app = express();
const { PORT } = Config;

expressMiddlewares(app);
dbInit(mongoose);
appRoutes(app);




app.listen(PORT, () => {
    console.log(`App is running at: localhost:${PORT}`)
})



