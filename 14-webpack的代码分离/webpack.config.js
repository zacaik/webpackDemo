const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ReactRefreshWeppackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

console.log(path.join(process.cwd(), "public"));

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./buld"),
    // publicPath: "/",
  },
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
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new ReactRefreshWeppackPlugin(),
  ],
};
