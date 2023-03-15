const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "nosources-source-map",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./build"), // 必须是绝对路径
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // node_modules中的js文件不使用babel-loader处理
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: [["@babel/preset-env", { targets: "defaults" }]],
          // },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ],
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
