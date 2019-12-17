const _ = require('lodash');

const { isProduction } = require('./env');

function normalizeOutputFilename (chunkData) {
  let chunkName = chunkData.chunk.name;

  // remove `$` from start of the string
  if (_.startsWith(chunkData.chunk.name, '$')) {
    chunkName = chunkData.chunk.name.substr(1);
    return `js/${chunkName}.js`;
  }

  if (isProduction) {
    return `js/${chunkName}.[contenthash].js`;
  }

  return `js/${chunkName}.[contenthash].js`;
}

module.exports = normalizeOutputFilename;
