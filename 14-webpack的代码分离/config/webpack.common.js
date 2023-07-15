// const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWeppackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const resolveApp = require("./path");
const { merge } = require("webpack-merge");
const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

const commonConfig = {
  // context: path.resolve(__dirname, "../"), // 默认值为当前项目的根目录，即webpack的启动目录
  entry: {
    main: "./src/main.js",
    index: "./src/index.js",
    // main: { import: "./src/main.js", dependOn: "shared" },
    // index: { import: "./src/index.js", dependOn: "shared" },
    // lodash: "lodash",
    // dayjs: "dayjs",
    // shared: ["lodash", "dayjs"],
  },
  output: {
    filename: "[name].bundle.js",
    path: resolveApp("./build"),
    chunkFilename: "[name].[id].chunk.js",
    // path: path.resolve(__dirname, "../buld"),
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx"],
    alias: {
      // "@": path.resolve(__dirname, "../src"),
      "@": resolveApp("./src"),
    },
  },
  optimization: {
    splitChunks: {
      // chunks: "all",
      // minChunks: 1,
      // minSize: 1,
      // cacheGroups: {
      //   defaultVendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     filename: "[id]_verndors.js",
      //     priority: -10, // 优先级，谁高按照谁来打包
      //   },
      //   bar: {
      //     test: /bar/,
      //     filename: "[id]_bar.js",
      //   },
      // },
    },
    runtimeChunk: "single",
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
