const path = require("path");
const webpack = require('webpack');

// 抽取 css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 压缩JS
const TerserPlugin = require('terser-webpack-plugin');

// 引入多页面文件列表
const config = require("./config");
const common = require("./common");

module.exports = {
  entry: common.Entries,
  devtool: "cheap-module-source-map",
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
        use:["file-loader"]
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
    // 自动清理 dist 文件夹
    // new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 将 css 抽取到某个文件夹
    new MiniCssExtractPlugin({
      publicPath: config.cssPublicPath,
      filename: config.cssOutputPath,
      chunkFilename: '[name].[id].css',
    }),
    // 自动生成 HTML 插件
    ...common.HTMLPlugins,
  ],
};

