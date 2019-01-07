const mongoose = require('mongoose');
<% if (hasModel == true) { %>const <%= modelNameCapitalized %> = require('../models/<%= modelName %>'); <% } %>
const services = {};

services.all = () => {
    /* insert your interaction & logic with db here */
    <% if (hasModel == false) { %> return Promise.resolve([1, 2, 3]); <% } %>
    <% if (hasModel == true) { %> return <%= modelNameCapitalized %>.find({}); <% } %>
}


module.exports = services;