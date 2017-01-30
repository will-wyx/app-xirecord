/**
 * Created by will on 2017/1/29.
 */
module.exports = {
    entry: {
        app: './src/app.js',
        index: './src/index.js',
        login: './src/login.js'
    },
    output: {
        path: './public/js/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node-module/
            }
        ]
    }
};
