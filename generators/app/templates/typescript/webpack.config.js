const path = require('path');
const NodeExternals = require('webpack-node-externals')
const NodemonWebpack = require('nodemon-webpack-plugin');

module.exports = {
    entry: './server.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    target: 'node',
    externals: [NodeExternals()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new NodemonWebpack()
    ]
}