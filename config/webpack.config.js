module.exports = {
  HTMLDirs: [
    "index",
    "doll",
    "egg",
  ],
  dev: {
    host: 'localhost',
    port: '8082',
    contentBase: "../dist",
  },
  prod: {
    outputPublicPath: 'https://cdn.oaplusplus.com/lottery/', // 打包资源服务地址
  },
  jsOutputPath: "static/js/",
  imgPublicPath: "/",
  imgOutputPath: "static/images/",
  cssPublicPath: "/",
  cssOutputPath:"static/styles/[name].css",
};