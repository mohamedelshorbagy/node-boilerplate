const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');


module.exports = function (app) {

    app.use(morgan('dev'))
    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.use(cors());
    app.use(helmet());
    app.use(compression());
}