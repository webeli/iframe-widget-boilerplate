const path = require('path');

const _ = require('lodash');
const config = require('config');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Merge = require('webpack-merge');

const Paths = require('./webpack/utils/paths');
const { WEBPACK_MODE, isProduction } = require('./webpack/utils/env');
const devConfig = require('./webpack/dev.config');
const prodConfig = require('./webpack/prod.config');

const DEV_SERVER_HOST_URL = config.get('hostUrl');

// NOTE: entry starts with `$` will be excluded for chunks splitting and hashing
const baseConfig = {
  context: Paths.rootDir,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    '$widget-loader': path.resolve(Paths.srcDir, 'loader.js'),
    widget: path.resolve(Paths.srcDir, 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    jsonpFunction: '__IFRAME__WIDGET__'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        exclude: /frame.scss/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /frame.scss/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(Paths.srcDir, 'widget.html'),
      chunks: ['widget'],
      filename: 'widget.html'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: WEBPACK_MODE,
      HOST_URL: DEV_SERVER_HOST_URL
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: chunk => !_.startsWith(chunk.name, '$') // excule chunk starts with `$`
    }
  }
};

module.exports = Merge.smart(baseConfig, process.env.NODE_ENV === 'production' ? prodConfig : devConfig);
