const path = require('path');
const NodeExternals = require('webpack-node-externals');
const NodemonWebpack = require('nodemon-webpack-plugin');


module.exports = {
    entry: [
        '@babel/polyfill',
        './server.js'
    ],
    output: {
        filename: 'app.bundle.js',
        path: path.join(__dirname, 'dist')
    },
    target: 'node',
    externals: [NodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new NodemonWebpack()
    ]
}