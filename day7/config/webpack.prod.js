const base = require('./webpack.base');
const merge = require('webpack-merge');
const config = require('./config');
const webpack = require('webpack');
module.exports = merge(base, {
    mode: "production",
    output: {
        path: config.urls('build')
    }
});