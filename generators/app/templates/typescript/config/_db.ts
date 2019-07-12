import { Mongoose } from 'mongoose';


export default (mongoose: Mongoose) => {
    mongoose.connect('mongodb://localhost:27017/ts-webpack');
    mongoose.connection.on('connected', () => {
        console.log(`Database Connected`);
    })
}