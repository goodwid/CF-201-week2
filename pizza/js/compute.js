function randomRange (low,high) {
    if (low < high) {
        return Math.floor(Math.random()*(high-low))+low;
    } else if (low >= high) {
        return low;
    }
}

exports.randomRange = randomRange;
