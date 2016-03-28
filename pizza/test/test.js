var assert = require('assert');
var compute = require('../js/compute.js');

var i,n;
function testRandomRange () {
    describe('Testing compute.js function: randomRange, iteration: ' + i, function() {
      // it('should check first question', function() {     assert.deepEqual(compute.getQuestion(0), 'first');   });
      it ('should return true as a random number as function call does not return a number outside of 10-45', function() {
              n=compute.randomRange (10,45);
              assert(true === ((10 <= n) && (n <= 45)));

      });
      it ('should return false as a function call does return a number between 30-92', function () {
              n=compute.randomRange (30,92);
              assert(false === ((n < 30) && (n > 92)));
      });
    });   // describe 1
}

for (i=0;i<1000;i++) {
    testRandomRange();
}

describe ('Testing compute.js function: driversCalc: ', function () {
    it('Should return 3 based on any number between 7-9', function () {
        assert (true === (compute.driversCalc(8) === 3));

    });
    it('Should:', function () {
        assert (false === (compute.driversCalc(10) === 3));
    });
});
