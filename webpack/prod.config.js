const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const getNormalizedOutputFilename = require('./utils/normalizeOutputFilename');

module.exports = {
  mode: 'production',
  bail: true,
  output: {
    filename: chunkData => getNormalizedOutputFilename(chunkData),
    chunkFilename: 'js/[name].[contenthash].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name]-[contenthash].css',
      chunkFilename: 'styles/[name]-[contenthash].css'
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  }
};
