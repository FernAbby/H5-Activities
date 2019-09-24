const autoprefixer_browsers = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 8',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

module.exports = {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: autoprefixer_browsers,
      //是否美化属性值 默认：true
      cascade: true,
      //是否去掉不必要的前缀 默认：true
      remove: true
    },
    'precss': {},

    'postcss-calc': {},
    'postcss-plugin-px2rem': {
      rootValue: 75, //
      unitPrecision: 5, // 保留小数点几位数
      minPixelValue: 2, // 小于2像素不转换
      propBlackList: ["min-width", "min-height"]
    },
  }
};