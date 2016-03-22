//This all looks very clean. I think the assignment asked that the first sentence of each question be printed to the page, followed by the output of the function. Not sure how important it is that you follow that to the letter.

var exports = {};
document.addEventListener('DOMContentLoaded', function() {
    var problemOneIn  = document.getElementById('problemOneIn');
    var problemOneOut = document.getElementById('problemOneOut');
    var p1arg1 = 10;
    var p1arg2 = 13;
    problemOneIn.textContent  = 'Calling sum() with an arguments of ' + p1arg1 + ' and ' + p1arg2 +'.';
    problemOneOut.textContent = 'sum() returned ' + sum(p1arg1,p1arg2);


    var problemTwoIn  = document.getElementById('problemTwoIn');
    var problemTwoOut = document.getElementById('problemTwoOut');
    var p2arg1 = 4;
    var p2arg2 = 7;
    problemTwoIn.textContent  = 'Calling multiply() with an arguments of ' + p2arg1 + ' and ' + p2arg2 +'.';
    problemTwoOut.textContent = 'multiply() returned ' + multiply(p2arg1,p2arg2);

    var problemThreeIn  = document.getElementById('problemThreeIn');
    var problemThreeOut = document.getElementById('problemThreeOut');
    var p3arg1 = 3;
    var p3arg2 = 4;
    var p3arg3 = 9;
    problemThreeIn.textContent  = 'Calling sumAndMultiply() with an arguments of ' + p3arg1 + ', ' + p3arg2 + ', and ' + p3arg3 + '.';
    problemThreeOut.textContent = 'sumAndMultiply() returned ' + sumAndMultiply(p3arg1,p3arg2,p3arg3);

    var problemFourIn  = document.getElementById('problemFourIn');
    var problemFourOut = document.getElementById('problemFourOut');
    var p4arg1 = [4,6,9];
    problemFourIn.textContent  = 'Calling sumArray() with an arguments of ' + p4arg1 +'.';
    problemFourOut.textContent = 'sumArray() returned ' + sumArray(p4arg1);

    var problemFiveIn  = document.getElementById('problemFiveIn');
    var problemFiveOut = document.getElementById('problemFiveOut');
    var p5arg1 = [4,6,9];
    problemFiveIn.textContent  = 'Calling multiplyArray() with an arguments of ' + p5arg1 +'.';
    problemFiveOut.textContent = 'multiplyArray() returned ' + multiplyArray(p5arg1);
});
