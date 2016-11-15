var assert = require('assert');
var compute = require('../js/compute.js');

  describe('Testing compute.js function', () => {
    var results = [];
    var highest, lowest;
    for (var i = 0; i < 10000; i++) {
      results.push(compute.randomRange(10,45));
    }
    highest = Math.max.apply(null, results);
    lowest = Math.min.apply(null, results);

    it ('10000 function calls do not return a number outside of 10-45', function() {
      assert(lowest >= 10 && lowest <= 45);
      assert(highest >= 10 && highest <= 45);
    });
  });

describe ('Testing compute.js function: driversCalc: ', function () {
  it('Should return 3 based on any number between 7-9', function () {
    assert.equal(compute.driversCalc(8),3);
  });
  it('Should', function () {
      assert.equal(compute.driversCalc(10),4);
  });
});
