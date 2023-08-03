module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              [
                "import",
                {
                  libraryName: "antd",
                  libraryDirectory: "lib", // 源代码目录
                  style: "css",
                  camel2DashComponentName: true, // 驼峰转-
                  customName: (name, file) => {
                    // 自定义导入名称
                    const filename = file.opts.filename;
                    if (name === "TimePicker") {
                      return "antd/lib/custom-time-picker";
                    }
                    if (filename.indexOf("/path/to/my/different.js") >= 0) {
                      return "antd/lib/custom-name";
                    }
                    return `antd/lib/${name}`;
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
