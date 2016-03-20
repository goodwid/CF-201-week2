var epicFailVideo = function(epicRating, hasAnimals) {
    this.epicRating=epicRating;
    this.hasAnimals=hasAnimals;
}

epicFailVideo.prototype.generateRandom = function (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

epicFailVideo.prototype.dailyLikes = function() {
    var viewers, percentage;
    viewers = this.generateRandom(10, 30) * this.epicRating;

    if (this.hasAnimals) {
        percentage = 0.75;
    } else {
        percentage = 0.40;
    }
    return Math.round(viewers * percentage);
}

epicFailVideo.prototype.weeklyLikes = function () {
    var total = 0;

    for (var i=0;i<7;i++) {
        total += this.dailyLikes();
    }
    return total;
}

var parkourFail = new epicFailVideo(7,false);
var corgiFail = new epicFailVideo(4,true);

console.log(parkourFail.weeklyLikes());
console.log(corgiFail.weeklyLikes());
