var assert = require('assert');
var app = require('../js/app.js');

describe('Goodwin function tests:', function() {
  // it('should check first question', function() {     assert.deepEqual(compute.getQuestion(0), 'first');   });

    it ('should return 8 when adding 3 and 5', function() {
        assert.deepEqual(app.sum(3,5),8);
    });
    it ('should return 7 when adding -2 and 9', function() {
        assert.deepEqual(app.sum(-2,9),7);
    });
    it ('should return "fourfive" when adding "four" and "five"', function() {
        assert.deepEqual(app.sum("four","five"),"fourfive");
    });



});
