import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';


export default (app) => {

    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(cors());
    app.use(helmet());
    app.use(compression());
}