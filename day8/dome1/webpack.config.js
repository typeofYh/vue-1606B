const path = require('path');
const Htmlplugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: []
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    devServer: {
        port: 8081,
        host: "localhost",
        contentBase: "./dist/",
        setup(app) {
            app.get('/data', (req, res) => {
                res.json({
                    data: [{
                        name: "李四",
                        age: 14
                    }, {
                        name: "王五",
                        age: 15
                    }, {
                        name: "小明",
                        age: 13
                    }]
                })
            })
        }
    },
    plugins: [
        new Htmlplugin({
            template: "./index.html",
            inject: "body"
        })
    ]
}