var webpack = require ("webpack");
var path = require ("path");
var Dashboard = require ("webpack-dashboard");
var DashboardPlugin = require ("webpack-dashboard/plugin");
var webpackConfig = require ("./webpack.config");

const ROOT = process.cwd ();
const setData = new Dashboard ().setData;

const devServer = {
  hot: true,
  host: "0.0.0.0",
  contentBase: path.resolve (ROOT, "dist"),
  publicPath: "/",
  stats: { colors: true },
  quiet: true
};

module.exports = Object.assign ({}, webpackConfig, {
  entry: {
    bundle: [
      webpackConfig.entry.bundle[0],
      "react-hot-loader/patch",
      "webpack/hot/only-dev-server"
    ].concat (webpackConfig.entry.bundle.slice (1))
  },
  devtool: "source-map",
  devServer,
  plugins: webpackConfig.plugins.concat ([
    new DashboardPlugin (setData),
    new webpack.NamedModulesPlugin (),
    new webpack.HotModuleReplacementPlugin ()
  ])
});
