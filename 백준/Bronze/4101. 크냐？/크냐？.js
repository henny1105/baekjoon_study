const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
	let [a, b] = input[i].split(' ').map(Number);

	if (a > b) {
		console.log('Yes');
	} else {
		console.log('No');
	}
}