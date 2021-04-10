// More example: github.com/chalk/chalk
const chalk = require('chalk');
console.log(chalk.red('ERROR!'));
// equivalent to terminal color sequence:
console.log('\x1b[31m' + 'ERROR!' + '\x1b[0m');
