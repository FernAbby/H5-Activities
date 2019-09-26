const env = process.env.NODE_ENV.replace(/(\s*$)|(^\s*)/ig,'');

module.exports = require(`./config/webpack.${env}.js`);