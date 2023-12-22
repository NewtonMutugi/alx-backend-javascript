const Utils = {
  calculateNumber: function (a, b, type) {
    let result;
    if (type === 'SUM') {
      result = Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
      result = Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
      if (Math.round(b) === 0) {
        result = 'Error';
      } else {
        result = Math.round(a) / Math.round(b);
      }
    } else {
      throw new Error('Invalid type');
    }
    return result;
  },
};

module.exports = Utils;
