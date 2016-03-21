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
        assert(isNaN(compute.multiply('one','two')));
    });
}); // describe 2

describe ('Goodwin problem 3: ', function () {
    it ('should return [12,60] when called with 3,4,5', function () {
        assert.deepEqual(compute.sumAndMultiply(3,4,5),[12,60]);
    });
    it ('should return [55,4500] when called with 10,15,30', function () {
        assert.deepEqual(compute.sumAndMultiply(10,15,30),[55,4500]);
    });
});

describe ('Goodwin problem 4: ', function () {
    it ('should return 12 when called with [3,4,5]', function () {
        assert.deepEqual(compute.sumArray([3,4,5]),12);
    });
    it ('should return 55 when called with [10,15,30]', function () {
        assert.deepEqual(compute.sumArray([10,15,30]),55);
    });
});
