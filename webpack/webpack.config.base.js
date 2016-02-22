'use strict';

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'angular-google-auth2',
    libraryTarget: 'umd'
  },
  externals: ['angular'],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders:  ['babel-loader?presets[]=es2015'], exclude: /node_modules/ }
    ]
  }
};
