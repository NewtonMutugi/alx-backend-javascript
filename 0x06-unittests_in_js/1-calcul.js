const calculateNumber = (type, a, b) => {
  switch (type) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      if (Math.round(b) === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    default:
      throw new TypeError('Invalid type. Please use SUM, SUBTRACT, or DIVIDE.');
  }
};

module.exports = calculateNumber;
