const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
let result = 1;

for (let i = 1; i <= num; i++) {
	result *= i;
}

console.log(result);