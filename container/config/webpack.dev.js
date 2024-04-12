const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
    mode : 'development',
    output : {
        publicPath : 'http://localhost:8080/'
    },
    devServer :{
        port :  8080,
        historyApiFallback : {
            index : '/index.html',
        }
    },
    plugins : [
        new ModuleFedrationPlugin({
            name : 'container',
            remotes : {
                marketing : 'marketing@http://localhost:8081/remoteEntry.js',
                auth : 'auth@http://localhost:8082/remoteEntry.js'
            },
            shared : packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template : './public/index.html',
        })
    ]
}


module.exports = merge(commonConfig,devConfig);