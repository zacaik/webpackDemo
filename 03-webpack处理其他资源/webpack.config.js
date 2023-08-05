const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"), // 必须是绝对路径
    publicPath: "assets/",
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
            options: {
              importLoaders: 1, // 表示外链的css文件，也需要使用前1个loader进行处理
            },
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
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // 匹配要处理的文件后缀
        // type: "asset/resource", // webpack5的新特性，处理css样式引入背景图时，需要使用这个特性
        // type: "asset/inline", // 将图片资源转换成data URI
        type: "asset/resource", // 可自动切换成resource或inline
        generator: {
          filename: "public/[name].[hash:6][ext]", // 设置使用asset/resource打包的静态资源的输出路径
        },
        // parser: {
        //   dataUrlCondition: {
        //     // 设置使用inline方式的文件最大大小
        //     maxSize: 100 * 1024,
        //   },
        // },
        // use: [
        //   {
        //     loader: "url-loader",
        //     options: {
        //       name: "img/[name].[hash:6].[ext]",
        //       limit: 100 * 1024, // 100kb以内的图片才进行base64处理
        //       // outputPath: "img",
        //     }
        //   }
        // ]
      },
      {
        test: /\.ttf|eot|woff2?$/i,
        type: "asset/resource",
        generator: {
          filename: "public/[name].[hash:6][ext]",
        },
      },
    ],
  },
};
