const express = require('express');
const mongoose = require('mongoose');



const app = express();


require('./config/express')(app);
require('./routes/index')(app);
require('./config/db')(mongoose);


listen();

function listen() {
    app.listen(3000, () => {
        console.log('App Listen in Port => 3000');
    })
}
