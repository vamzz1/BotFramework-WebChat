const webpack = require('webpack');
const webpackDevConfig = require('./webpack.config');

module.exports = webpackDevConfig.map(config => {
    var updatedConfig = Object.assign({}, config)
    updatedConfig.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ]
    return updatedConfig;
});
