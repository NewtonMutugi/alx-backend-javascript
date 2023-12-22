const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should round both numbers up and return the correct sum', () => {
    expect(calculateNumber('SUM', 1.7, 3.7)).to.equal(6); // 1.7 rounds to 2, 3.7 rounds to 4
  });

  it('should round both numbers down and return the correct sum', () => {
    expect(calculateNumber('SUM', 1.2, 3.2)).to.equal(4); // 1.2 rounds to 1, 3.2 rounds to 3
  });

  it('should round one number up and one number down and return the correct sum', () => {
    expect(calculateNumber('SUM', 1.7, 3.2)).to.equal(5); // 1.7 rounds to 2, 3.2 rounds to 3
  });

  it('should handle negative numbers correctly', () => {
    expect(calculateNumber('SUM', -1.7, 3.7)).to.equal(2); // -1.7 rounds to -2, 3.7 rounds to 4
    expect(calculateNumber('SUM', 1.7, -3.2)).to.equal(-1); // 1.7 rounds to 2, -3.2 rounds to -3
  });

  it('should handle zero correctly', () => {
    expect(calculateNumber('SUM', 0, 3.7)).to.equal(4); // 0 stays 0, 3.7 rounds to 4
    expect(calculateNumber('SUM', 1.7, 0)).to.equal(2); // 1.7 rounds to 2, 0 stays 0
  });

  it('should round both numbers up and return the correct difference', () => {
    expect(calculateNumber('SUBTRACT', 1.7, 3.7)).to.equal(-2); // 1.7 rounds to 2, 3.7 rounds to 4
  });

  it('should round both numbers down and return the correct difference', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 3.2)).to.equal(-2); // 1.2 rounds to 1, 3.2 rounds to 3
  });

  it('should round one number up and one number down and return the correct difference', () => {
    expect(calculateNumber('SUBTRACT', 1.7, 3.2)).to.equal(-1); // 1.7 rounds to 2, 3.2 rounds to 3
  });


});
