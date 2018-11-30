const path = require('path');
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const HtmlPage = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: {
        main: path.join(__dirname, 'src', 'main.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ExtractText.extract({
                fallback: "style-loader",
                use: ['css-loader']
            })
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader'
        }, {
            test: /\.(ttf|eot|svg|woff)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1000
                }
            }]
        }, {
            test: /\.vue$/,
            loader: "vue-loader"
        }]
    },
    devServer: {
        port: 8888,
        host: "localhost",
        contentBase: './dist'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new ExtractText("style.css"),
        new HtmlPage({
            template: './index.html'
        })
    ]
}