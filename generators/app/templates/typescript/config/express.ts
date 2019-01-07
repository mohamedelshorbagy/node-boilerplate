import { Express } from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as compress from 'compression';
import * as helmet from 'helmet';

export default (app: Express) => {

    app.use(morgan('dev'));



    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());


    app.use(cors());
    app.use(helmet());
    app.use(compress());




}

