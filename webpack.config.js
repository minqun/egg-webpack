const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const devConfig = require('./client/webpack.dev')
const prodConfig = require('./client/webpack.prod')

const smp = new SpeedMeasurePlugin()

module.exports = process.env.NODE_ENV === 'development' ? devConfig : smp.wrap(prodConfig)