const path = require('path');
const webpack = require('webpack');
const HtmlPage = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        index: path.join(__dirname, 'src', 'index.js'),
        abc: path.join(__dirname, 'src', 'main.js')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ["babel-loader"]
        }, {
            test: /\.css$/,
            //use: ['style-loader', 'css-loader']
            use: ExtractText.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }, {
            test: /\.(png|jpg|gif|jpeg|bmp)/,
            use: ['file-loader']
        }, {
            test: /\.(ttf|woff|eot|svg)/,
            use: ['url-loader']
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },

    devServer: {
        port: 9090,
        host: "localhost",
        // contentBase:,
        // publicPath:,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPage({
            template: "./index.html",
            filename: "index.html"
        }),
        new ExtractText('main.css')
    ]
}