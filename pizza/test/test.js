var assert = require('assert');
var compute = require('../js/compute.js');
var app = require ('../js/app.js');

describe('Testing compute.js functions: randomRange', function() {
  // it('should check first question', function() {     assert.deepEqual(compute.getQuestion(0), 'first');   });
  it ('should return true as a random number as function call does not return a number outside of 10-45', function() {
      var i,n;
      for (i=0;i<1000;i++) {
          n=compute.randomRange (10,45);
          assert(true === (10 <= n <= 45));
      }
  });
  it ('should return false as a function call does return a number between 30-92', function () {
      var i,n;
      for (i=0;i<1000;i++) {
          n=compute.randomRange (30,92);
          assert(false === ((n < 30) && (n > 92)));
      }
  });
});   // describe 1
