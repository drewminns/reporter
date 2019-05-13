/* eslint-disable no-console */
/* eslint import/no-unresolved: 0 */
/* eslint global-require: 0 */

const PROD = process.env.NODE_ENV === 'production';
const TEST = process.env.NODE_ENV === 'test';

if (PROD) {
  console.log('**** Running PRODUCTION ****');
  module.exports = require('./prod.js');
} else if (TEST) {
  console.log('**** Running TEST ****');
  module.exports = require('./test.js');
} else {
  console.log('**** Running DEVELOPMENT ****');
  module.exports = require('./dev.js');
}
