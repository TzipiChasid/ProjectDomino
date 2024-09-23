const assert = require('assert');

function add(a, b) {
  return a + b;
}

describe('Add function', function() {
  it('should return the sum of two numbers', function() {
    assert.strictEqual(add(1, 2), 3);
  });
});