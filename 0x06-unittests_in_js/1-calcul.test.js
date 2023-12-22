const calculateNumber = require('./1-calcul.js');

console.log(calculateNumber('SUM', 10.3, 5.7));

console.log(calculateNumber('SUBTRACT', 10.3, 5.7));

console.log(calculateNumber('DIVIDE', 10.3, 5.7));

console.log(calculateNumber('DIVIDE', 10.3, 0));

try {
  console.log(calculateNumber('MULTIPLY', 10.3, 5.7));
} catch (error) {
  console.error(error.message);
}

console.log(calculateNumber('SUM', 10.75, 5.25));
console.log(calculateNumber('SUBTRACT', 10.75, 5.25));
console.log(calculateNumber('DIVIDE', 10.75, 5.25));

console.log(calculateNumber('SUM', -10.3, 5.7));
console.log(calculateNumber('SUBTRACT', -10.3, 5.7));
console.log(calculateNumber('DIVIDE', -10.3, 5.7));

console.log(calculateNumber('SUM', 10.49, 5.51));
console.log(calculateNumber('SUBTRACT', 10.49, 5.51));
console.log(calculateNumber('DIVIDE', 10.49, 5.51));
