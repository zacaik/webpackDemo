// const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWeppackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const resolveApp = require("./path");
const { merge } = require("webpack-merge");
const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

const commonConfig = {
  // context: path.resolve(__dirname, "../"), // 默认值为当前项目的根目录，即webpack的启动目录
  entry: "./src/index.js", // 相对于context的路径，而不是相对于当前文件
  output: {
    filename: "bundle.js",
    path: resolveApp("./build"),
    // path: path.resolve(__dirname, "../buld"),
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx"],
    alias: {
      // "@": path.resolve(__dirname, "../src"),
      "@": resolveApp("./src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new ReactRefreshWeppackPlugin(),
  ],
};

module.exports = function (env) {
  process.env.NODE_ENV = env.production ? "production" : "development"; // 给环境变量赋值，使得babel-config中可以获取到当前环境
  return env.production
    ? merge(commonConfig, prodConfig)
    : merge(commonConfig, devConfig);
};
