const path = require('path');
const webpack = require('webpack');
const querystring = require('querystring');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //提取css文件
const extractCss = new ExtractTextPlugin('common.css');
const extractSass = new ExtractTextPlugin('[name].css');
const HtmlPlugin = require('html-webpack-plugin'); //引入打包后的文件
module.exports = {
    entry: path.join(__dirname, 'src', 'app.js'),
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.(sass|scss)$/,
            //use: ['style-loader', 'css-loader', 'sass-loader']
            use: extractSass.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }, 'sass-loader']
            })
        }, {
            test: /\.css$/,
            use: extractCss.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }]
            })
        }]
    },
    devServer: {
        port: 9090,
        host: 'localhost',
        setup(app) {
            app.get('/data', (req, res) => {
                res.json({ name: '1606B' })
            });
            app.post('/user', (req, res) => {
                var data = '';
                req.on('data', (chunk) => {
                    data += chunk;
                });
                req.on('end', () => {
                    data = decodeURI(data);
                    var buffer = querystring.parse(data);
                    if (buffer.name == 'zs' && buffer.pwd == '1234') {
                        res.json({
                            res: 0,
                            mes: 'success'
                        });
                    } else {
                        res.json({
                            res: 1,
                            mes: 'error'
                        });
                    }

                });
            });
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        extractCss,
        extractSass,
        new HtmlPlugin({
            title: '1606B', //输出的title名称
            template: "./index.html", //要找html文件  模板文件
            filename: "index.html", //输出的文件名称
            inject: "head"
        })
    ]
}