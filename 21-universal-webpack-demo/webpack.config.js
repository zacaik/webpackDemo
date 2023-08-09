const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 每次构建清除输出目录
const HtmlWebpackPlugin = require("html-webpack-plugin");

class MyPlugin {
  apply(compiler) {
    console.log("myplugin 启动");

    compiler.hooks.compilation.tap("MyPlugin", (compilation) => {
      // 注了一个在资源处理阶段执行的回调函数
      compilation.hooks.processAssets.tap(
        {
          name: "MyPlugin",
          stage:
            // 在优化资源大小的阶段触发回调函数
            compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE,
        },
        (assets) => {
          for (const name in assets) {
            if (name.endsWith(".js")) {
              const asset = compilation.getAsset(name);
              const contents = asset.source.source(); // 获取到 js 文件的内容
              const withoutComments = contents.replace(/\/\*\*+\*\//g, ""); // 剔除掉多余注释
              // 重写上下文对象，实现要求的 source 方法和 size 方法
              compilation.updateAsset(
                name,
                new compiler.webpack.sources.RawSource(withoutComments)
              );
            }
          }
        }
      );
    });
  }
}

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  devServer: {
    hot: true,
    static: {
      publicPath: "/assets",
    },
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          name: "vendors",
        },
      },
    },
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
      {
        test: /.md$/,
        use: "./markdown-loader.js",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    // new MyPlugin(),
  ],
};
