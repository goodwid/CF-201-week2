function randomRange (low,high) {
 return Math.floor(Math.random()*(high-low))+low;
}
exports.randomRange = randomRange;

for (var i=0;i<1000;i++) {
    n = randomRange(20,29);
    if (n < 20) {console.log ('low' + i);}
    if (n > 29) {console.log ('high' + i);}
}
