function randomRange (low,high) {
    if (low < high) {
        return Math.floor(Math.random()*(high-low))+low;
    } else if (low >= high) {
        return low;
    }
}

exports.randomRange = randomRange;

function driversCalc (num) {
    return Math.ceil(num/3);
}

exports.driversCalc = driversCalc;
