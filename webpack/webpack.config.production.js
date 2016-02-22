'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

var config = Object.create(baseConfig);
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    Promise:require('es6-promise').Promise
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
];

module.exports = config;
