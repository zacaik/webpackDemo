const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       outputPath: "public",
        //       name: "[name]_[hash:6].[ext]",
        //     },
        //   },
        // ],
      },
    ],
  },
};
