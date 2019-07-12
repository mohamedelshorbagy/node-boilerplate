const express = require('express');
<% if (hasModel == true) { %>const mongoose = require('mongoose'); <% } %>





const app = express();


require('./config/express')(app);
require('./routes/index')(app);
<% if (hasModel == true) { %>require('./config/db')(mongoose); <% } %>



listen();

function listen() {
    app.listen(3000, () => {
        console.log('App Listen in Port => 3000');
    })
}
