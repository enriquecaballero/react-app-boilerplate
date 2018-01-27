var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var CompressionPlugin = require("compression-webpack-plugin");
var webpackConfig = require("./webpack.config");

module.exports = Object.assign({}, webpackConfig, {
  plugins: webpackConfig.plugins.concat([
    new UglifyJsPlugin({
      exclude: [/\.min\.js$/gi],
      parallel: true,
      uglifyOptions: {
        compress: false
      }
    })
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   deleteOriginalAssets: true
    // })
  ])
});
