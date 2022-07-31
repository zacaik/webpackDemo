const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"), // 必须是绝对路径
  },
  module: {
    rules: [
      {
        // loader: "css-loader", // Rule.use: [ { loader } ] 的简写
        test: /\.css$/, // 匹配待解析的资源，使用正则表达式
        use: [
          "style-loader", // use中loader的解析顺序是从下往上的
          {
            loader: "css-loader", // 使用的loader
          },
          // "css-loader", // use: [ { loader: 'style-loader'} ]的简写
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
};
