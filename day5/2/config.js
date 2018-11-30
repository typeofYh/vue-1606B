const path = require('path');
module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            //匹配文件类型 支持正则
            test: /\.(js|jsx)$/,
            //参数
            options: {
                presets: ['@babel/preset-env']
            },
            //过滤文件
            exclude: /node_modules/,
            loader: 'babel-loader'
                // use: [{
                //     loader: 'babel-laoder'
                // }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader'
        }, {
            test: /\.(eot|svg|ttf|woff)$/,
            loader: 'url-loader'
        }]
    }
}