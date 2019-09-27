const webpackMerge = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackBase = require("./webpack.base");
const config = require("./webpack.config");

module.exports = webpackMerge(webpackBase,{
  devtool: "cheap-module-source-map",
  output: {
    publicPath: config.prod.outputPublicPath
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
});
