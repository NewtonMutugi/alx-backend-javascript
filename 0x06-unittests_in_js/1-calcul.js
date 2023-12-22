function calculateNumber(a, b, type = 'SUM') {
  const num1 = Math.round(a);
  const num2 = Math.round(b);
  if (type === 'SUM') {
    // Sum the two integers and return the result
    return num1 + num2;
  }
  if (type === 'SUBTRACT') {
    // Subtract the two integers and return the result
    return num1 - num2;
  }
  if (type === 'DIVIDE') {
    if (num2 === 0) {
      return 'Error';
    }
    // Divide the two integers and return the result
    return num1 / num2;
  }
  throw new TypeError('Type must be SUM, SUBTRACT, or DIVIDE');
}

module.exports = calculateNumber;
