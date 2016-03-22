var exports = {};
//document.addEventListener('DOMContentLoaded', function() {
var compute = require('../js/compute.js');

var restaurants = [{
    location: "Beaverton",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Bob Jones",
    managerImage: "",
    phoneNumber: "555-34-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: {
        block1: [0,4],
        block2: [0,4],
        block3: [1,4],
        block4: [3,8],
        block5: [5,12],
        block6: [6,11]
    }
}];

// var Shop = function () {
//     driversNeeded: function () {
//         return hourlyDeliveries % 3;
//     }
// };


function createPizzaData (open,close,pizzaCount) {
        var hour,i;
        var blockcount=0;
        var results = [];
        var low,high;
        for (hour = open ; hour < close ; hour++) {
            low = pizzaCount[(blockcount-blockcount%3)/3][0];
            high = pizzaCount[(blockcount-blockcount%3)/3][1];
            results.push ([hour,compute.randomRange(low,high)]);
            blockcount++;
        } // for i
        return results;
    }  // for function


console.log (createPizzaData(   restaurants[0].hoursOpen[0],
                                restaurants[0].hoursOpen[1],
                                restaurants[0].pizzaCount));

//});  // addEventListener
