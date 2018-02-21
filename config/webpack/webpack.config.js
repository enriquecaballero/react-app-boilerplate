var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var fs = require("fs");

const ROOT = process.cwd();
const packageJSON = JSON.parse(
  fs.readFileSync(path.resolve(ROOT, "package.json"), "utf8")
);

module.exports = {
  entry: { bundle: ["babel-polyfill", path.resolve(ROOT, "src/Main.jsx")] },
  output: {
    filename: "[name].js",
    path: path.resolve(ROOT, "dist"),
    publicPath: ""
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      "~": path.resolve(ROOT, "src")
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "production")
      }
    }),
    new HtmlWebpackPlugin({
      title: packageJSON.name,
      favicon: path.resolve(ROOT, "resources", "favicon.ico"),
      template: path.resolve(ROOT, "src", "templates", "index.ejs"),
      inject: "body",
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: "url-loader",
        options: {
          limit: "300000",
          name: "[name].[ext]",
          root: "."
        }
      }
    ]
  }
};
