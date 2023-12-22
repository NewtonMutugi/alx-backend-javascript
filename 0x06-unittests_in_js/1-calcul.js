function calculateNumber(a, b, type) {
  if (type === 'SUM') {
    // Sum the two integers and return the result
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    // Subtract the two integers and return the result
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    if (num2 === 0) {
      return 'Error';
    }
    // Divide the two integers and return the result
    return Math.round(a) / Math.round(b);
  }
  throw new TypeError('Type must be SUM, SUBTRACT, or DIVIDE');
}

module.exports = calculateNumber;
