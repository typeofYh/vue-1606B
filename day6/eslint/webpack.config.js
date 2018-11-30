const path = require('path');
module.exports = {
    mode: "development",
    entry: path.join(__dirname, 'src', 'main.js'),
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/,
            options: {
                emitError: true
            }
        }]
    }
}