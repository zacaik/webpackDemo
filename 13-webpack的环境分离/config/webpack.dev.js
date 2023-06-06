const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    host: "0.0.0.0",
    open: true,
    hot: "only",
    static: {
      directory: path.join(process.cwd(), "public"),
      publicPath: "/abc",
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
  plugins: [new CleanWebpackPlugin({})],
};
