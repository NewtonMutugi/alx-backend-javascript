const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should round both numbers up and return the correct sum', () => {
    assert.strictEqual(calculateNumber(1.7, 3.7), 6); // 1.7 rounds to 2, 3.7 rounds to 4
  });

  it('should round both numbers down and return the correct sum', () => {
    assert.strictEqual(calculateNumber(1.2, 3.2), 4); // 1.2 rounds to 1, 3.2 rounds to 3
  });

  it('should round one number up and one number down and return the correct sum', () => {
    assert.strictEqual(calculateNumber(1.7, 3.2), 5); // 1.7 rounds to 2, 3.2 rounds to 3
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.7, 3.7), 2); // -1.7 rounds to -2, 3.7 rounds to 4
    assert.strictEqual(calculateNumber(1.7, -3.2), -1); // 1.7 rounds to 2, -3.2 rounds to -3
  });

  it('should handle zero correctly', () => {
    assert.strictEqual(calculateNumber(0, 3.7), 4); // 0 stays 0, 3.7 rounds to 4
    assert.strictEqual(calculateNumber(1.7, 0), 2); // 1.7 rounds to 2, 0 stays 0
  });
});
