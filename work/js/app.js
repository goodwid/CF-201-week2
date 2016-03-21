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
var p3arg3 = 8;
problemThreeIn.textContent  = 'Calling sumAndMultiply() with an arguments of ' + p3arg1 + ', ' + p3arg2 + ', and ' + p3arg3 + '.';
problemThreeOut.textContent = 'sumAndMultiply() returned ' + sumAndMultiply(p3arg1,p3arg2,p3arg3);
