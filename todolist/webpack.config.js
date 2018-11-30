const webpack = require("webpack");
const path = require('path');
const Htmlplugin = require('html-webpack-plugin');
const Css = require('extract-text-webpack-plugin');
const Vueloaderplugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: Css.extract({
                fallback: "style-loader",
                use: ['css-loader']
            })
        }, {
            test: /\.vue$/,
            use: ['vue-loader']
        }]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    devServer: {
        port: 8888,
        open: true,
        hot: true
    },
    plugins: [
        new Vueloaderplugin(),
        new Css('style.css'),
        new webpack.HotModuleReplacementPlugin(),
        new Htmlplugin({
            template: "./index.html"
        })
    ]
}