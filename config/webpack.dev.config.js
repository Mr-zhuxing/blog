const path = require('path')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    // open: true, // 自动打开
    compress: true,
    port: 9000,
  },
});
