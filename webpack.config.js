var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
        './src/index' // Your appʼs entry point
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader']
        }]
    },
    postcss: function() {
        return [autoprefixer, precss];
    }
};
