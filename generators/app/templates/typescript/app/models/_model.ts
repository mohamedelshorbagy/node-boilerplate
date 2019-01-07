import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

const <%= modelNameCapitalized %>Schema: Schema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number,
        match: /^[0-9]+$/
    }
});


export default mongoose.model('<%= modelNameCapitalized %>', <%= modelNameCapitalized %>Schema);
