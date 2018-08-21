const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJSON = require("../../package.json");

const ROOT = process.cwd();

module.exports = {
  entry: ["babel-polyfill", path.resolve(ROOT, "src", "index.js")],
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"]
  },
  plugins: [
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
        test: /\.(css|scss)$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 2,
              sourceMap: true,
              localIdentName: "[name]__[local]__[hash:base64:8]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: path.resolve(ROOT, "config", "postcss.config.js")
              }
            }
          },
          "sass-loader"
        ]
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
