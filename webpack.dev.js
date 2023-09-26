const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    static: `${__dirname}/dist`,
    port: 8000,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      }
    },
  },
});