var webpack = require('webpack');
var path    = require('path')

module.exports = {
    context: path.join(__dirname),
    entry: './assets/js/app.js',
    output: {
        path: __dirname,
        filename: 'public/js/app.js'
    },
    module: {
        loaders: [
        {
            test: /(\.jsx|\.js)$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['latest' , 'react']
            }
        }
    ]}
};
