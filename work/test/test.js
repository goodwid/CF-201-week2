var assert = require('assert');
var compute = require('../js/compute.js');

describe('Goodwin problem 1:', function() {
  // it('should check first question', function() {     assert.deepEqual(compute.getQuestion(0), 'first');   });

    it ('should return 8 when adding 3 and 5', function() {
        assert.deepEqual(compute.sum(3,5),8);
    });
    it ('should return 7 when adding -2 and 9', function() {
        assert.deepEqual(compute.sum(-2,9),7);
    });
    it ('should return "fourfive" when adding "four" and "five"', function() {
        assert.deepEqual(compute.sum("four","five"),"fourfive");
    });

});   // describe 1

describe ('Goodwin problem 2: ', function () {
    it ('should return 12 when multiplying 3 and 4', function() {
        assert.deepEqual(compute.multiply(3,4),12);
    });
    it ('should return -35 when multiplying -5 and 7', function() {
        assert.deepEqual(compute.multiply(-5,7),-35);
    });
    it ('should return NaN when multiplying "one" and "two"', function() {
        assert.deepEqual(compute.multiply('one','two'),NaN);
    });
}); // describe 2
