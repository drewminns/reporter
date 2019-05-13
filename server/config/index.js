/* eslint import/no-unresolved: 0 */
/* eslint global-require: 0 */
const chalk = require('chalk');

const PROD = process.env.NODE_ENV === 'production';
const TEST = process.env.NODE_ENV === 'test';
const { log } = console;

if (PROD) {
  log(chalk.whiteBright.bgGreen('Running PRODUCTION'));
  module.exports = require('./prod.js');
} else if (TEST) {
  log(chalk.whiteBright.bgYellow('Running TEST'));
  module.exports = require('./test.js');
} else {
  log(chalk.whiteBright.bgBlueBright('Running DEVELOPMENT'));
  module.exports = require('./dev.js');
}
