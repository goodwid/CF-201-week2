var exports = {};
document.addEventListener('DOMContentLoaded', function() {

var restaurants = {
    location: "Beaverton",
    hoursOpen: [800,200],
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Bob Jones",
    managerImage: "",
    phoneNumber: "555-34-PIZZA",
    pizzaCount: {
        block1: [0,4],
        block2: [0,7],
        block3: [2,15,
        block4: [15,35],
        block5: [12,31],
        block6: [5,20]
    },
    deliveryCount: {
        block1: [0,4],
        block2: [0,4],
        block3: [1,4],
        block4: [3,8],
        block5: [5,12],
        block6: [6,11]
    },
    driversNeeded: function (hourlyDeliveries) {
        return hourlyDeliveries % 3;
    }

};


});
