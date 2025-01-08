const path = require('path');

module.exports = function override(config) {
  config.output.path = path.join(__dirname, 'dist');
  return config;
};