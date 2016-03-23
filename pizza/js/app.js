

var restaurantData = [
    ["Beaverton",[8,26], "Tuesday - Sunday, closed on Mondays", "Bob Jones", "images/jones.jpg", "555-34-PIZZA", [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]], [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]]],
    ["Hillsboro",[8,26], "Tuesday - Sunday, closed on Mondays", "Edward Montgomery", "images/montgomery.jpg", "555-21-PIZZA", [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]], [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]]],
    ["Downtown",[8,26], "Tuesday - Sunday, closed on Mondays", "Fred Smith", "images/smith.jpg", "555-99-PIZZA", [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]], [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]]],
    ["Northeast",[8,26], "Tuesday - Sunday, closed on Mondays", "Angela Harper", "images/harper.jpg", "555-11-PIZZA", [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]], [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]]],
    ["Clackamas",[8,26], "Tuesday - Sunday, closed on Mondays", "Walter Cartwright", "images/cartwright.jpg", "555-86-PIZZA", [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]], [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]]],
    ["PDX-Airport",[8,26], "Tuesday - Sunday, closed on Mondays", "Cindy Walker", "images/walker.jpg", "555-PDX-PIES", [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]], [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]]]
];

function Restaurant(item) {
    this.location = item[0];
    this.hoursOpen = item[1];
    this.dayOpen = item[2];
    this.manager = item[3];
    this.managerImage = item[4];
    this.phoneNumber = item[5];
    this.pizzaCount = item[6];
    this.deliveryCount = item[7];
}
var restaurants = [];
for (var i=0;i < restaurantData.length;i++) {
    restaurants[i] = new Restaurant (restaurantData[i]);
}

function createData (location) {
    var open = location.hoursOpen[0];
    var close = location.hoursOpen[1];
    var pizzaCount = location.pizzaCount;
    var deliveryCount = location.deliveryCount;
    var hour,pLow,pHigh,dLow,dHigh,pizzas,deliveries,drivers;
    var blockcount=0; // Determines which block to use based on the hour, assuming each block is 3 hours long.
    var results = [];
    for (hour = open ; hour < close ; hour++) {
        pLow = pizzaCount[(blockcount-blockcount%3)/3][0];
        pHigh = pizzaCount[(blockcount-blockcount%3)/3][1];
        dLow = deliveryCount[(blockcount-blockcount%3)/3][0];
        dHigh = deliveryCount[(blockcount-blockcount%3)/3][1];
        pizzas=randomRange(pLow,pHigh);                 // randomRange() is loaded in compute.js
        deliveries=randomRange(dLow,Math.min(dHigh,pizzas));
        drivers = Math.ceil(deliveries/3);
        results.push ([hour,pizzas,deliveries,drivers]);
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
        storedata = createData(restaurants[i]); // generates random data for this particular store.
        for (j=0;j<storedata.length;j++) {
            perLocationTotal += storedata[j][1];
            if (j%2) { // every other table highlighting
                out[i] += '<tr class="even">';
            } else {
                out[i] += '<tr class="odd">';
            }
            if (storedata[j][0] > 23) { // convert hours 24-26 to times in the following morning
                out[i] += '<td>' + (storedata[j][0]-24) + ':00</td>';
            } else {
                out[i] += '<td>' + storedata[j][0] + ':00</td>';
            }
            out[i] += '<td>' + storedata[j][1] + '</td>';
            out[i] += '<td>' + storedata[j][2] + '</td>';
            out[i] += '<td>' + storedata[j][3] + '</td>';
            out[i] += '</tr>';
        }  // for j
        out[i] += '<tr><td>Total:</td><td>' + perLocationTotal + '</td></tr>';
        total += perLocationTotal;
        out[i] += '</table>';
    }   // for i
    return [out,total];
}  // function

function generateStoreData (restaurants) {
    var i,t;
    var out = [];
    for (i in restaurants) {
        out[i] = '';
        out[i] += '<ul class="locationInfo">';
        out[i] += '<li>Manager: ' + restaurants[i].manager + '</li>';
        out[i] += '<li>Phone Number: ' + restaurants[i].phoneNumber + '</li>';
        if (restaurants[i].hoursOpen[1]> 23) { // converting hours 24-26 to the next morning times.
            t = restaurants[i].hoursOpen[1]-24;
        } else {
            t = restaurants[i].hoursOpen[1];
        }
        out[i] += '<li>Hours: ' + restaurants[i].hoursOpen[0] +':00 to ' + t + ':00</li>'
        out[i] += '<li>Days Open: ' + restaurants[i].dayOpen + '</li>';
        out[i] += '</ul>';
        out[i] += '<img class="imageClass" src="' + restaurants[i].managerImage + '">';
    } // for i
    return out;
} // function

// function randomRange (low,high) {
//  return Math.floor(Math.random()*(high-low))+low;
// }

function displayTable (num) {
    if (num >=0) {
        pizzaData.innerHTML = outPizza[num];
        storeData.innerHTML = outStore[num];
    } else {
        pizzaData.innerHTML = outPizza.join('\n');
        storeData.innerHTML = outStore.join('\n');
    }
}

function addLiById (location,textToAdd,num){
    var liParent = document.getElementById(location);
    if (liParent != null) {  // only create the DOM elements if the parent exists to attach them to.
        var newLi = document.createElement('li');
        var newA = document.createElement('a');
        var newAText = document.createTextNode(textToAdd);
        newA.appendChild(newAText);
        newA.setAttribute('href','#');
        newA.setAttribute('onclick','displayTable('+num+')');
        newLi.appendChild(newA);
        newLi.setAttribute('id','li'+num);
        liParent.appendChild(newLi);
    }
}

function createNavList() {
    for (var l in restaurants) {
        addLiById('navList',restaurants[l].location, l)
    }
    addLiById('navList','All Locations',-1)
}

createNavList();
var m = generatePizzaData(restaurants);
var totalPizzaOutput = m[1];
var outPizza = m[0];
var outStore = generateStoreData(restaurants);
pizzaData = document.getElementById('pizzaId');
storeData = document.getElementById('storeId');
totalData = document.getElementById('pizzaTotal');
if (pizzaData != null) {
    pizzaData.innerHTML = outPizza[0];
    storeData.innerHTML = outStore[0];
}
totalData.innerHTML = totalPizzaOutput;
