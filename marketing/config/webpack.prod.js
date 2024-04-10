const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
    mode : 'production',
    output : {
        filename : '[name].[contenthash].js'
    },
    plugins : [
        new ModuleFederationPlugin({
            name : 'container',
            remotes : {
                marketing : `marketing@${domain}/marketing/remotEntry.js`
            },
            shared : packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template : './public/index.html',
        })
    ]
}


module.exports = merge(commonConfig, prodConfig);