const chalk = require('chalk');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

chalk.whiteBright;
console.log('# inside project folder, run:');
console.log('node .');
console.log('# The node app will prompt for few questions:');
readline.question("What's your name? ", (nameInput) => {
	readline.question("What's your year of birth? ", (birthInput) => {
		readline.question("What's your home town? ", (homeTownInput) => {
			console.log('# After user answers the three questions, respond with:');
			console.log(
				`> Thank you. Hello ${chalk.magentaBright(nameInput)}, so you are ${chalk.yellow(
					2021 - birthInput
				)} year old and from ${chalk.red(homeTownInput)}.`
			);
			console.log(`# Note that you must convert ${chalk.yellow('[yob]')} to ${chalk.yellow('[age]')}`);
			console.log(
				`# Use different color in console.log for ${chalk.yellow('[name]')} ${chalk.yellow('[age]')} and ${chalk.yellow(
					'[homeTown]'
				)}`
			);
			readline.close();
		});
	});
});
