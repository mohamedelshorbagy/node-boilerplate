const mongoose = require('mongoose');

const <%= modelNameCapitalized %>Schema = new mongoose.Schema({
    name: String
}); 



const <%= modelNameCapitalized %>Model = mongoose.model('<%= modelNameCapitalized %>', <%= modelNameCapitalized %>Schema);



module.exports = <%= modelNameCapitalized %>Model;