module.exports = function (mongoose) {
    mongoose.connect('mongodb://localhost:27017/<%= dbName %>');
    mongoose.connection.on('connected', () => {
        console.log('Database Connected!');
    })
}