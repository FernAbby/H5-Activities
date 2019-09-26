const webpack = require('webpack');
const webpackMerge = require("webpack-merge");

const webpackBase = require("./webpack.base");
const config = require("./webpack.config");

module.exports = webpackMerge(webpackBase,{
  devtool: 'inline-source-map',

  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    // 项目根目录
    contentBase: config.dev.contentBase,
    // 服务器IP地址
    host: config.dev.host,
    // 服务端是否开启gzip压缩
    compress: true,
    port: config.dev.port,
    hot: true,
    inline: true,
    open: true,
    // 错误、警告展示设置
    /*overlay:{
      errors:true,
      warnings:true
    },*/
    /* resolve: {//引入文件默认格式后缀
       extensions: ['.js','.json','.web.js','.mjs'],
     },*/
  }
});