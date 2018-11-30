const path = require('path');
const base = require('./webpack.base');
const merge = require('webpack-merge');
module.exports = merge(base, {
    mode: 'development',
    devServer: {
        port: 9090,
        host: 'localhost',
        contentBase: path.join(__dirname, '../dist')
    }
});