const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const Vueloader = require('vue-loader/lib/plugin');
module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'vue-style-loader', 'css-loader']
        }]
    },
    resolve: {
        alias: {
            "component": path.join(__dirname, 'src/components'),
            "@": path.join(__dirname, 'src'),
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    plugins: [
        new Vueloader(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: "./index.html",
            filename: 'index.html'
        })
    ]
}