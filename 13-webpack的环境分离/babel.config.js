const presets = [["@babel/preset-env"], ["@babel/preset-react"]];
const plugins = [];

const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
  plugins.push(["react-refresh/babel"]);
}

module.exports = {
  presets,
  plugins,
};
