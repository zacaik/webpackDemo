const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./build"), // 必须是绝对路径
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack测试",
      template: "./public/index.html",
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
  ],
};
