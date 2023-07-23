const webpack = require("webpack");
const config = require("./webpack.config")({ production: true });

const compiler = webpack(config);

compiler.run((err, status) => {
  if (err) {
    console.log(err);
  } else {
    console.log(status);
  }
});
