const path = require("path");
// 引入插件
const HTMLWebpackPlugin = require("html-webpack-plugin");

const config = require("./config");

let HTMLPlugins = [];

let Entries = {};

// 生成多页面的集合
config.HTMLDirs.forEach((page) => {
  const htmlPlugin = new HTMLWebpackPlugin({
    filename: path.resolve(__dirname, page == 'index' ? `../dist/index.html` : `../dist/pages/${page}.html`),
    template: path.resolve(__dirname, page == 'index' ? `../src/index.html` : `../src/pages/${page}/index.html`),
    title: page,
    favicon: '',
    inject: true,  // 不把生成的css，js插入到html中
    chunks: [page],
    minify: {  // 压缩html
      minifyCSS: true, // 压缩css
      minifyJS: true, // 压缩js
      collapseWhitespace: true, // 清除空格、换行符
      removeComments: true, // 清除注释
      caseSensitive: true, // 大小写敏感
      removeEmptyElements: false, // 清除空元素
      removeScriptTypeAttributes: false, // 清除script标签type属性
      removeStyleLinkTypeAttributes: false, // 清除style标签type属性
    }
  });
  HTMLPlugins.push(htmlPlugin);
  Entries[page] = path.resolve(__dirname, `../src/pages/${page}/index.js`);
});

module.exports = {
  HTMLPlugins: HTMLPlugins,
  Entries: Entries,
};