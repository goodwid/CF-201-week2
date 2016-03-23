var exports = {};

//document.addEventListener('DOMContentLoaded', function() {
var restaurants = [
{
    location: "Beaverton",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: "Tuesday - Sunday, closed on Mondays",
    manager: "Bob Jones",
    managerImage: "images/jones.jpg",
    phoneNumber: "555-34-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "Hillsboro",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: "Tuesday - Sunday, closed on Mondays",
    manager: "Edward Montgomery",
    managerImage: "images/montgomery.jpg",
    phoneNumber: "555-21-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "Downtown",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: "Tuesday - Sunday, closed on Mondays",
    manager: "Fred Smith",
    managerImage: "images/smith.jpg",
    phoneNumber: "555-99-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "Northeast",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: "Tuesday - Sunday, closed on Mondays",
    manager: "Angela Harper",
    managerImage: "images/harper.jpg",
    phoneNumber: "555-11-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "Clackamas",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: "Tuesday - Sunday, closed on Mondays",
    manager: "Walter Blenman",
    managerImage: "images/blenman.jpg",
    phoneNumber: "555-34-PIZZA",
    pizzaCount: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
    deliveryCount: [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
},
{
    location: "PDX-Airport",
    hoursOpen: [8,26], // 26 = 2am the following morning
    dayOpen: "Tuesday - Sunday, closed on Mondays",
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



function generatePizzaData (restaurants) {
    var i,j,k;
    var out = [];
    var total = 0;
    var perLocationTotal;
    for (i in restaurants) {
        perLocationTotal = 0;
        out[i] = '';
        out[i] += '<h3>Restaurant: ' + restaurants[i].location + '</h3>';
        out[i] += '<table>';
        out[i] += '<tr><th>Time</th><th>Pizzas per Hour</th><th>Deliveries</th><th>Drivers Needed</th></tr>';
        storedata = createData(restaurants[i]);
        // perLocationTotal += totalPizzas(storedata);
        for (j=0;j<storedata.length;j++) {
            perLocationTotal += storedata[j][1];
            if (j%2) {
                out[i] += '<tr class="even">';
            } else {
                out[i] += '<tr class="odd">';
            }
            if (storedata[j][0] > 23) {
                out[i] += '<td>' + (storedata[j][0]-24) + ':00</td>';
            } else {
                out[i] += '<td>' + storedata[j][0] + ':00</td>';
            }
            out[i] += '<td>' + storedata[j][1] + '</td>';
            out[i] += '<td>' + storedata[j][2] + '</td>';
            out[i] += '<td>' + storedata[j][3] + '</td>';
            out[i] += '</tr>';
        }
        out[i] += '<tr><td>Total:</td><td>' + perLocationTotal + '</td></tr>';
        total += perLocationTotal;
        out[i] += '</table>';
    }
    return [out,total];
}

function generateStoreData (restaurants) {
    var i;
    var out = [];
    for (i in restaurants) {
        out[i] = '';
        out[i] += '<ul class="locationInfo">';
        out[i] += '<li>Manager: ' + restaurants[i].manager + '</li>';
        out[i] += '<li>Phone Number: ' + restaurants[i].phoneNumber + '</li>';
        out[i] += '<li>Hours: ' + restaurants[i].hoursOpen[0] +':00 to ' + (restaurants[i].hoursOpen[1]) + ':00</li>'
        out[i] += '<li>Days Open: ' + restaurants[i].dayOpen + '</li>';
        out[i] += '</ul>';
        out[i] += '<img class="imageClass" src="' + restaurants[i].managerImage + '">';
    }
    return out;
}


function randomRange (low,high) {
 return Math.floor(Math.random()*(high-low))+low;
}

function displayTable(num) {
    if (num >=0) {
        pizzaData.innerHTML = outPizza[num];
        storeData.innerHTML = outStore[num];
    } else {
        pizzaData.innerHTML = outPizza.join('\n');
        storeData.innerHTML = outStore.join('\n');
    }
}

function addLiById (location,textToAdd,num){
    var newLi = document.createElement('li');
    //var newLiText = document.createTextNode(textToAdd);
    //newLi.appendChild(newLiText);
    var newA = document.createElement('a');
    var newAText = document.createTextNode(textToAdd);

    newA.appendChild(newAText);
    newA.setAttribute('href','#');
    newA.setAttribute('onclick','displayTable('+num+')');
    newLi.appendChild(newA);
    newLi.setAttribute('id','li'+num);
    var liParent = document.getElementById(location);
    liParent.appendChild(newLi);
}

// var ids = ['zero','one','two','three','four','five'];
for (var l=0;l<restaurants.length;l++) {
    addLiById('navList',restaurants[l].location, l)
}
addLiById('navList','All Locations',-1)

var m = generatePizzaData(restaurants);
var totalPizzaOutput = m[1];
var outPizza = m[0];
var outStore = generateStoreData(restaurants);
pizzaData = document.getElementById('pizzaId');
storeData = document.getElementById('storeId');
totalData = document.getElementById('pizzaTotal');
pizzaData.innerHTML = outPizza[0];
storeData.innerHTML = outStore[0];
totalData.innerHTML = totalPizzaOutput;
console.log(totalPizzaOutput);

//});  // addEventListenerfunction createEl(elName, elText) {
