const path = require('path');
const Htmlplugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    //基础路径
    context: path.join(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    },
    resolve: {
        //设置第三方库的文件别名
        alias: {
            "vue$": 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                "presets": ["@babel/preset-env"]
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [new Htmlplugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}