
const translation = require('./translation/translation.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(translation);
};
