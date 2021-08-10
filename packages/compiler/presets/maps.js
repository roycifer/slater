module.exports = (options = {}) => {
  return function createConfig ({ config, watch }) {
    config.devtool = 'source-map'
  }
}
