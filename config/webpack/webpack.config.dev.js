const webpack = require("webpack");
const path = require("path");
const webpackConfig = require("./webpack.config");

const LOCALHOST = "0.0.0.0";
const ROOT = process.cwd();

const devServer = {
  hot: true,
  host: LOCALHOST,
  contentBase: path.resolve(ROOT, "dist"),
  publicPath: "/",
  stats: { colors: true }
  // proxy: {
  //   "/api": {
  //     target: `http://<HOSTNAME>:<PORT_NUMBER>/`,
  //     pathRewrite: { "^/api": "" }
  //   }
  // }
};

module.exports = Object.assign({}, webpackConfig, {
  devtool: "source-map",
  mode: "development",
  devServer,
  plugins: webpackConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
});
