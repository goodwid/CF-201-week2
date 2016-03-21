var assert = require('assert');
var compute = require('../js/compute.js');

describe('My first test', function() {
  it('should check first question', function() {
    assert.deepEqual(compute.getQuestion(0), 'first');
  });

  it('should check third question', function() {
    assert.deepEqual(compute.getQuestion(2), 'third');
  });

  it('should increment 0 to get 5', function() { assert(5 == compute.addFive(0)); });
  it('should increment 4 to get 9', function() { assert(9 == compute.addFive(4)); });
  it('should increment -1008 to get -1003', function() { assert(compute.addFive(-1008) == -1003); });

  // test the isEven function
  it('should determine that 2 is true',  function() { assert(true  === compute.isEven(2)); });
  it('should determine that 3 is false', function() { assert(false === compute.isEven(3)); });

  //test the mult3 function
  it('should determine that 9 is a multiple of 3', function() { assert(true === compute.mult3(9)); });
  it('should determine that 5 is not multiple of 3', function() { assert(false === compute.mult3(5)); });

  // test the mult6 function
  it('should determine that 12 is a multiple of 6', function() { assert(true === compute.mult6(12)); });
  it('should determine that 99 is not multiple of 6', function() { assert(false === compute.mult6(7)); });


});
