var exports = {};

//document.addEventListener('DOMContentLoaded', function() {
var restaurants = [
{
    location: "Beaverton",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Bob Jones",
    managerImage: "images/jones.jpg",
    phoneNumber: "555-34-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "Hillsboro",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Edward Montgomery",
    managerImage: "images/montomgery.jpg",
    phoneNumber: "555-21-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "Downtown",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Fred Smith",
    managerImage: "images/smith.jpg",
    phoneNumber: "555-99-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "Northeast",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Angela Harper",
    managerImage: "images/harper.jpg",
    phoneNumber: "555-11-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "Clackamas",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Walter Blenman",
    managerImage: "images/blenman.jpg",
    phoneNumber: "555-34-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "PDX-Airport",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: [0,2,3,4,5,6,7],
    manager: "Cindy Walker",
    managerImage: "images/walker.jpg",
    phoneNumber: "555-34-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
}];

function createData (location) {
    var open = location.hoursOpen[0];
    var close = location.hoursOpen[1];
    var pizzaCount = location.pizzaCount;
    var deliveryCount = location.deliveryCount;
    var hour,pLow,pHigh,dLow,dHigh,pizzas,deliveries,drivers;
    var blockcount=0;
    var results = [];
    for (hour = open ; hour < close ; hour++) {
        pLow = pizzaCount[(blockcount-blockcount%3)/3][0];
        pHigh = pizzaCount[(blockcount-blockcount%3)/3][1];
        dLow = deliveryCount[(blockcount-blockcount%3)/3][0];
        dHigh = deliveryCount[(blockcount-blockcount%3)/3][1];
        pizzas=randomRange(pLow,pHigh);
        deliveries=randomRange(dLow,dHigh);
        if (deliveries > pizzas) {
            deliveries = pizzas;
        }
        drivers = Math.ceil(deliveries/3);
        results.push ([hour,pizzas,deliveries, drivers]);
        blockcount++;
    } // for i
    return results;
}  // for function

function generateTables (restaurants) {
    var i,j,k;
    var out = [];
    for (var i in restaurants) {
        out[i] = '';
        out[i] += '<h3>Restaurant: ' + restaurants[i].location + '</h3>';
        out[i] +='<table>';
        out[i] +=' <tr><th>time</th><th>pizza/hr</th><th>Deliveries</th><th>drivers needed</th></tr>';
        storedata = createData(restaurants[i]);
        for (j=0;j<storedata.length;j++) {
            if (j%2) {
                out[i] += '  <tr class="even">';
            } else {
                out[i] += '  <tr class="odd">';
            }
            if (storedata[j][0] > 23) {
                out[i] += '    <td>' + (storedata[j][0]-24) + ':00</td>';
            } else {
                out[i] += '    <td>' + storedata[j][0] + ':00</td>';
            }
            out[i] += '    <td>' + storedata[j][1] + '</td>';
            out[i] += '    <td>' + storedata[j][2] + '</td>';
            out[i] += '    <td>' + storedata[j][3] + '</td>';
            out[i] += '  </tr>';
        }
        out[i] += '</table>';
    }
    return out;
}

function randomRange (low,high) {
 return Math.floor(Math.random()*(high-low))+low;
}

function displayTable(num) {
    if (num >=0) {
        pizzaData.innerHTML = out[num];
    } else {
        pizzaData.innerHTML = out.join('\n');
    }

}
function addAToLi (location,textToAdd,num) {


    parent.appendChild(newA);
};

function addLiById (location,textToAdd,num){
  var newLi = document.createElement('li');
  //var newLiText = document.createTextNode(textToAdd);
  //newLi.appendChild(newLiText);
  var newA = document.createElement('a');
  var newAText = document.createTextNode(textToAdd);
  newA.appendChild(newAText);
  newA.setAttribute('href','#');
  newA.setAttribute('onclick','displayTable('+num+')');
  console.log (location);
  newLi.appendChild(newA);
  var liParent = document.getElementById(location);
  liParent.appendChild(newLi);

};




// var ids = ['zero','one','two','three','four','five'];
for (var l=0;l<restaurants.length;l++) {
    addLiById('navList',restaurants[l].location, l)
}
addLiById('navList','All Locations',-1)

out = generateTables(restaurants);
pizzaData = document.getElementById('pizzaData');
pizzaData.innerHTML = out[3];

//});  // addEventListenerfunction createEl(elName, elText) {
