var exports = {};
document.addEventListener('DOMContentLoaded', function() {;

var restaurants = [
{
    location: "Beaverton",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Bob Jones",
    managerImage: "",
    phoneNumber: "555-34-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "Hillsboro",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Bob Jones",
    managerImage: "",
    phoneNumber: "555-21-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "Downtown",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Fred Smith",
    managerImage: "",
    phoneNumber: "555-99-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "Northeast",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Angela Harper",
    managerImage: "",
    phoneNumber: "555-11-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "Clackamas",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Walter Blenman",
    managerImage: "",
    phoneNumber: "555-34-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "PDX-Airport",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Cindy Walker",
    managerImage: "",
    phoneNumber: "555-34-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
];

function createData (open,close,pizzaCount,deliveryCount) {
    var hour,pLow,pHigh,dLow,dHigh,pizzas,deliveries,drivers;
    var blockcount=0;
    var results = [];
    for (hour = open ; hour < close ; hour++) {
        pLow = pizzaCount[(blockcount-blockcount%3)/3][0];
        pHigh = pizzaCount[(blockcount-blockcount%3)/3][1];
        dLow = pizzaCount[(blockcount-blockcount%3)/3][0];
        dHigh = pizzaCount[(blockcount-blockcount%3)/3][1];
        pizzas=randomRange(pLow,pHigh);
        deliveries=randomRange(dLow,dHigh);
        if (deliveries > pizzas) {
            deliveries = pizzas;
        }
        drivers = deliveries&3;
        results.push ([hour,pizzas,deliveries, drivers]);
        blockcount++;
    } // for i
    return results;
}  // for function
var i,j,k;
var out ='' ;

for (var i in restaurants) {
    out += '  <h3>Restaurant: ' + restaurants[i].location + '</h3>';
    out +='<table>';
    out +=' <tr><th>time</th><th>pizza/hr</th><th>Deliveries</th><th>drivers needed</th></tr>';
    storedata = createData(restaurants[i].hoursOpen[0],restaurants[i].hoursOpen[1],restaurants[i].pizzaCount,restaurants[0].deliveryCount);
    for (j=0;j<storedata.length;j++) {
        out += '  <tr>';
        out += '    <td>' + storedata[j][0] + ':00</td>';
        out += '    <td>' + storedata[j][1] + '</td>';
        out += '    <td>' + storedata[j][2] + '</td>';
        out += '    <td>' + storedata[j][3] + '</td>';
        out += '  </tr>'
    }
}

document.getElementById('pizzaData').innerHTML = out;
});  // addEventListener
