// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the correct sum for integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and return the sum for one decimal number', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round and return the sum for two decimal numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round and return the sum for two decimal numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Add more test cases as needed

});
