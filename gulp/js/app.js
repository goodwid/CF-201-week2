var pAddFiveIn  = document.getElementById('pAddFiveIn');
var pAddFiveOut = document.getElementById('pAddFiveOut');

var arg = 10;
pAddFiveIn.textContent  = 'Calling addFive() with an argument of ' + arg;
pAddFiveOut.textContent = 'addFive() returned ' + addFive(arg);
