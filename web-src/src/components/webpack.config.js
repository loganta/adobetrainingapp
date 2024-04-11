// webpack.config.js
const Dotenv = require('dotenv-webpack');

module.exports = {
    plugins: [
        new Dotenv({
            path: './dev.auth.js',
            safe: true, // load '../../path/to/other.env.example'
            defaults: true, // load '../../path/to/other.env.defaults'
        })
    ]
};