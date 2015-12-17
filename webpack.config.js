var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    parentChild: './libs/parent-child.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].min.js'
  },
  module: {
    loaders: [
    { test: /\.vue$/, loader: 'vue' },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }
  },
  devServer: {
    contentBase: './dist'
  }
}