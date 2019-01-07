import Config from './config';

export default (mongoose) => {
    mongoose.connect(Config.DB);
    mongoose.connection.on('connected', () => {
        console.log(`DB Connected`);
    })
}


