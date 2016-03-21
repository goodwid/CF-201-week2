/********************************************************
 * Example of TDD on a feature used in Week 1's labwork *
 ********************************************************/
var question = ['first', 'second', 'third'];

function getQuestion(index) {
  return (question[index]);
}

//exports refers to the "var app = require('../js/app');" in our test.js file. In other words its using the app.js as an object whose method is "getQuestion"
exports.getQuestion = getQuestion;

/***********************************************************
 * Example of TDD on a feature related to Week 2's labwork *
 ***********************************************************/
function addFive(num) {
  return num + 5;
}

function isEven(num) {
    return (num % 2) === 0;

}
exports.isEven = isEven;

function mult_3(num) {
    return num % 3 === 0;
}
exports.mult_3 = mult_3;

function mult_6(num) {
    return isEven(num) && mult_3(num);
}
exports.mult_6 = mult_6;
// if(addFive(0) == 5) {
//   console.log("test 1 passed!");
// } else {
//   console.log("test 1 failed");
// }
// if(addFive(100) == 105) {
//   console.log("test 2 passed!");
// } else {
//   console.log("test 2 failed");
// }
// if(addFive(11) == 16) {
//   console.log("test 3 passed!");
// } else {
//   console.log("test 3 failed");
// }

exports.addFive = addFive;
