const webpack = require('webpack');
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 引入基础配置文件
const webpackBase = require("./webpack.config.base");

// 引入配置文件
const config = require("./config");
const common = require("./common");

// 合并配置文件
module.exports = webpackMerge(webpackBase,{
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
          ],
        })
      },
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      publicPath: config.cssPublicPath,
      filename: config.cssOutputPath,
    }),
    // 自动生成 HTML 插件
    ...common.HTMLPlugins,
  ],
// 配置 webpack-dev-server
  devServer: {
    // 项目根目录
    contentBase: config.devServerOutputPath,
    // 服务器IP地址
    // host: '192.168.3.6',
    // 服务端是否开启gzip压缩
    compress: true,
    port: 8086,
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