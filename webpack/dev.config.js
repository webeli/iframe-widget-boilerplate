const path = require('path');

const config = require('config');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const Paths = require('./utils/paths');
const getNormalizedOutputFilename = require('./utils/normalizeOutputFilename');

const DEV_SERVER_PORT = config.get('devServerPort');

module.exports = {
  mode: 'development',
  entry: {
    host: path.resolve(Paths.hostDir, 'index.js')
  },
  output: {
    filename: chunkData => getNormalizedOutputFilename(chunkData),
    chunkFilename: 'js/[name].js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(Paths.hostDir, 'index.html'),
      chunks: ['host'],
      filename: 'index.html',
      favicon: path.resolve(Paths.hostDir, 'assets', 'webpack.png')
    })
  ],
  devServer: {
    port: DEV_SERVER_PORT,
    historyApiFallback: true
  }
};
