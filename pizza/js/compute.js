function randomRange (low,high) {
 return Math.floor(Math.random()*(high-low))+low;
}
exports.randomRange = randomRange;

console.log (randomRange(10,45));
