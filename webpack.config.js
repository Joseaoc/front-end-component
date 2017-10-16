const path = require('path');

module.exports = {
    entry: ['./src/app.js'],
    devServer: {
        contentBase: './dist'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    }
}