#!/usr/bin/node
const calculateNumber = require('./1-calcul.js');

console.log(calculateNumber('SUM', 10.3, 5.7)); // Output: 16
console.log(calculateNumber('SUBTRACT', 10.3, 5.7)); // Output: 4
console.log(calculateNumber('DIVIDE', 10.3, 5.7)); // Output: 2
console.log(calculateNumber('DIVIDE', 10.3, 0)); // Output: 'Error'
