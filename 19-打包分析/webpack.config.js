const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TeserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const InlineChunkHtmlPlugin = require("inline-chunk-html-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./buld"),
  },
  devtool: "source-map",
  devServer: {
    hot: true,
    host: "0.0.0.0",
    devMiddleware: {
      // publicPath: "/abc",
    },
    open: true,
    hot: "only",
    static: {
      directory: path.join(process.cwd(), "public"),
      publicPath: "/abc",
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        // changeOrigin: true,
      },
    },
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TeserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          mangle: true,
          toplevel: true,
          keep_classnames: true,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: "babel-loader",
      },
      {
        test: /\.css/i,
        use: ["css-loader"],
        sideEffects: true,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: true, // 折叠空格
        keepClosingSlash: true, //
        removeComments: true, // 移除注释
        removeRedundantAttributes: true, //
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new CompressionPlugin({
      test: /\.(css|js)$/i,
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime.*\.js/]),
    new BundleAnalyzerPlugin(),
  ],
});
