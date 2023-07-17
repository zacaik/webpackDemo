const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ReactRefreshWeppackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TeserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");

console.log(path.join(process.cwd(), "public"));

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./buld"),
    // publicPath: "/",
  },
  devtool: "source-map",
  devServer: {
    hot: true,
    host: "0.0.0.0",
    devMiddleware: {
      // publicPath: "/abc",
    },
    open: true,
    hot: "only",
    static: {
      directory: path.join(process.cwd(), "public"),
      publicPath: "/abc",
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        // changeOrigin: true,
      },
    },
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimization: {
    // minimize: true,
    // minimizer: [
    //   new TeserPlugin({
    //     parallel: true,
    //     extractComments: false,
    //     terserOptions: {
    //       mangle: true,
    //       toplevel: true,
    //       keep_classnames: true,
    //     },
    //   }),
    //   new CssMinimizerPlugin({
    //     parallel: true,
    //   }),
    // ],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/, // 定义匹配规则
          filename: "[id]_verndors.js", // 输出的chunk的名称
          priority: 0, // 优先级，谁高按照谁来打包
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: "babel-loader",
      },
      {
        test: /\.css/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
