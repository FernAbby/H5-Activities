// 引入基础配置
const webpackBase = require("./webpack.config.base");
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");

// 合并配置文件
module.exports = webpackMerge(webpackBase,{
  devtool: "cheap-module-source-map",
  output: {
    publicPath: "/"
  },
});
