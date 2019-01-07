import * as mongoose from 'mongoose';

const <%= modelNameCapitalized %>Schema = new mongoose.Schema({
    name: String
}); 



const <%= modelNameCapitalized %>Model = mongoose.model('<%= modelNameCapitalized %>', <%= modelNameCapitalized %>Schema);

export default <%= modelNameCapitalized %>Model;











