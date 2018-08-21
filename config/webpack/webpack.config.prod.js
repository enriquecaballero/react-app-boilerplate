const CompressionPlugin = require("compression-webpack-plugin");
const webpackConfig = require("./webpack.config");

module.exports = Object.assign({}, webpackConfig, {
  mode: "production",
  plugins: webpackConfig.plugins.concat([
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      deleteOriginalAssets: true
    })
  ])
});
