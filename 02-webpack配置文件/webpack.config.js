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
          "postcss-loader", // postcss-loader的简化写法，读取postcss.config.js文件中的配置
          // {
          //   loader: "postcss-loader",
          //   // options传入loader所需的额外参数
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require("autoprefixer"),
          //         require("postcss-preset-env"),
          //       ],
          //     },
          //   },
          // },
          // "css-loader", // use: [ { loader: 'style-loader'} ]的简写
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
    ],
  },
};
