/* eslint import/no-unresolved: 0 */
/* eslint global-require: 0 */
const PROD = process.env.NODE_ENV === 'production';
const TEST = process.env.NODE_ENV === 'test';

if (PROD) {
  module.exports = require('./prod.js');
} else if (TEST) {
  module.exports = require('./test.js');
} else {
  module.exports = require('./dev.js');
}
