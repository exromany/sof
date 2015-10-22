'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackErrorNotificationPlugin = require('webpack-error-notification');
var autoprefixer = require('autoprefixer');

module.exports = {
  devServer: {
    publicPath: '/',
    hot: true,
    progress: true,
    colors: true,
    inline: true,
    quiet: true,
    noInfo: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true},
    historyApiFallback: true
  },

  devtool: '#source-map',

  entry: [
    './src/app.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist/'),
    publicPath: '/'
  },

  plugins: [
    new WebpackErrorNotificationPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      minify: false
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['src', 'node_modules']
  },

  module: {
    loaders: [
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10240&minetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10240&minetype=application/font-woff2' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10240&minetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10240&minetype=image/svg+xml' },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10240' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.js$/, loader: 'babel?stage=0', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'css!postcss!sass' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') }

    ]
  },

  postcss: function () {
    return [autoprefixer];
  }
};
