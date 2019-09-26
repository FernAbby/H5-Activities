const path = require("path");
const webpack = require('webpack');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 抽取css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css
const TerserPlugin = require('terser-webpack-plugin'); // 压缩JS

const config = require("./webpack.config");

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
  entry: Entries,
  devtool: "source-map",
  output:{
    filename: "static/js/[name].js",
    path: path.resolve(__dirname,"../dist")
  },
  // 加载器
  module: {
    rules:[
      {
        test: /\.html$/,
        loader: 'html-loader?minimize=true'
      },
        {
        test:/\.css$/,
        exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
          ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ],
        exclude: /node_modules/,
        include: /src/
      },
      {
        test:/\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
        exclude: /node_modules/,
        include: /src/
      },
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        include: /src/
      },
      {
        test: /\.(png|bmp|svg|jpe?g|gif)$/,
        use:{
          loader: "url-loader", // url-loader
          options:{
            // 打包生成图片的名字
            name: `${config.imgOutputPath}[folder]${'/'}[name].[ext]`,
            // 图片的生成路径
            publicPath: config.imgPublicPath,
            limit: 50, // 表示小于50kb的图片转为base64,大于50kb的是路径
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: '/', // 定义输出的图片文件夹
            publicPath: '/',
            name: 'static/fonts/[name].[ext]',
          }
        }],
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: 'json-loader',
        type: 'javascript/auto',
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: require.resolve('jquery'),
        loader: "expose-loader?jQuery!expose-loader?$"
      }
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true, // 开启缓存
        parallel: true, // 支持多进程
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      name: 'commons',
      filename: "[name].js",
    }
  },
  plugins:[
    // 将 css 抽取到某个文件夹
    new MiniCssExtractPlugin({
      publicPath: config.cssPublicPath,
      filename: config.cssOutputPath,
      chunkFilename: '[name].[id].css',
    }),
    // 自动生成 HTML 插件
    ...HTMLPlugins,
  ],
};

