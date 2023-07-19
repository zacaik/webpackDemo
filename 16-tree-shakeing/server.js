const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();

const config = require("./webpack.config");

// 传入配置信息，webpack根据配置信息进行编译,生成编译对象
const compiler = webpack(config);

// 将compiler对象转换为express的中间件
const middleware = webpackDevMiddleware(compiler);

// 应用这个中间件
app.use(middleware);

app.listen(3000, () => {
  console.log("本地服务已启动，端口3000");
});
