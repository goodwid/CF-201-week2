var exports = {};

var restaurantData = [
    ["Beaverton",[8,26], "Tuesday - Sunday, closed on Mondays", "Bob Jones", "images/jones.jpg", "555-34-PIZZA", [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]], [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]]],
    ["Hillsboro",[8,26], "Tuesday - Sunday, closed on Mondays", "Edward Montgomery", "images/montgomery.jpg", "555-21-PIZZA", [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]], [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]]],
    ["Downtown",[8,26], "Tuesday - Sunday, closed on Mondays", "Fred Smith", "images/smith.jpg", "555-99-PIZZA", [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]], [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]]],
    ["Northeast",[8,26], "Tuesday - Sunday, closed on Mondays", "Angela Harper", "images/harper.jpg", "555-11-PIZZA", [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]], [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]]],
    ["Clackamas",[8,26], "Tuesday - Sunday, closed on Mondays", "Walter Cartwright", "images/cartwright.jpg", "555-86-PIZZA", [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]], [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]]],
    ["PDX-Airport",[8,26], "Tuesday - Sunday, closed on Mondays", "Cindy Walker", "images/walker.jpg", "555-PDX-PIES", [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]], [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]]]
];

function Restaurant(item) {
    this.storeLocation = item[0];
    this.hoursOpen = item[1];
    this.dayOpen = item[2];
    this.manager = item[3];
    this.managerImage = item[4];
    this.phoneNumber = item[5];
    this.pizzaCount = item[6];
    this.deliveryCount = item[7];
    this.locationTotal = 0;
    this.dataStorage;
    this.retrieveData = function () {
        if (this.dataStorage == null) {
            this.dataStorage = this.createData();
            return this.dataStorage;
        } else {
            return this.dataStorage;
        }
    }
    this.createData = function () {
        var open = this.hoursOpen[0];
        var close = this.hoursOpen[1];
        var pizzaCount = this.pizzaCount;
        var deliveryCount = this.deliveryCount;
        var hour,pLow,pHigh,dLow,dHigh,pizzas,deliveries,drivers;
        var blockcount=0; // Determines which block to use based on the hour, assuming each block is 3 hours long.
        var results = [];
        for (hour = open ; hour < close ; hour++) {
            pLow = pizzaCount[(blockcount-blockcount%3)/3][0];
            pHigh = pizzaCount[(blockcount-blockcount%3)/3][1];
            dLow = deliveryCount[(blockcount-blockcount%3)/3][0];
            dHigh = deliveryCount[(blockcount-blockcount%3)/3][1];
            pizzas = randomRange(pLow,pHigh);                 // randomRange() is loaded in compute.js
            this.locationTotal += pizzas;
            deliveries=randomRange(dLow,Math.min(dHigh,pizzas));
            drivers = Math.ceil(deliveries/3);
            results.push ([hour,pizzas,deliveries,drivers]);
            blockcount++;
        } // for i
        return results;
    }
    this.generatePizzaTable = function () {
        var storeData = this.retrieveData();
        var total = 0;

        newDiv = document.createElement('div');
        newDiv.setAttribute('id','pizzaHolder');

        newHeading = document.createElement('h3');
        newHeadingText = document.createTextNode('Location: ' + this.storeLocation);
        newHeading.appendChild(newHeadingText);
        newDiv.appendChild(newHeading);

        newTable = document.createElement('table');
        newHeadRow = createTrEl();
        newHeadRow.appendChild (createThEl('Time'));
        newHeadRow.appendChild (createThEl('Pizzas'));
        newHeadRow.appendChild (createThEl('Deliveries'));
        newHeadRow.appendChild (createThEl('Drivers'));
        newTable.appendChild (newHeadRow);
        for (j=0;j<storeData.length;j++) {
            total += storeData[j][1];
            newRow = createTrEl();
            if (storeData[j][0] > 23) { // convert hours 24-26 to times in the following morning
                newRow.appendChild (createTdEl(storeData[j][0]-24 + ':00'));
            } else {
                newRow.appendChild (createTdEl(storeData[j][0]+ ':00'));
            }
            newRow.appendChild (createTdEl(storeData[j][1]));
            newRow.appendChild (createTdEl(storeData[j][2]));
            newRow.appendChild (createTdEl(storeData[j][3]));
            newTable.appendChild (newRow);
        } // for j
        this.LocationTotal = total;
        newDiv.appendChild(newTable);
        return (newDiv);
    }
    this.generateStoreData = function () {
        var i,t;
        newDiv = document.createElement('div');
        newDiv.setAttribute('id','storeHolder');

        newList = createUlEl();
        newList.setAttribute('class','locationInfo');
        newList.appendChild(createLiEl('Manager: ' + this.manager));
        newList.appendChild(createLiEl('Phone: ' + this.phoneNumber));
        if (this.hoursOpen[1]> 23) { // converting hours 24-26 to the next morning times.
            t = this.hoursOpen[1]-24;
        } else {
            t = this.hoursOpen[1];
        }
        newList.appendChild(createLiEl('Hours: '+ this.hoursOpen[0] +':00 to ' + t + ':00'));
        newList.appendChild(createLiEl('Days Open: '+ this.dayOpen));
        newDiv.appendChild(newList);
        newImage = document.createElement('img');
        newImage.setAttribute('class','imageClass');
        newImage.setAttribute('src',this.managerImage);
        newDiv.appendChild(newImage);

        return newDiv;
    }
}

var createTrEl = function () {
    var newTr = document.createElement('tr');
    return newTr;
};// createTrEl
var createTdEl = function (data) {
    var newTd = document.createElement('td');
    var newTdText = document.createTextNode(data);
    newTd.appendChild(newTdText);
    return newTd;
}; // createTdEl
var createThEl = function (data) {
    var newTh = document.createElement('th');
    var newThText = document.createTextNode(data);
    newTh.appendChild(newThText);
    return newTh;
}
var createUlEl = function () {
    var newUl = document.createElement('ul');
    return newUl;
};// createUlEl
var createLiEl = function (data) {
    var newLi = document.createElement('li');
    var newLiText = document.createTextNode(data);
    newLi.appendChild(newLiText);
    return newLi;
}

function getPizzaTotals () {
    var total = 0;
    for (i in restaurants) {
        total += restaurants.locationTotal;
    }
    return total;
}

function displayTable (num) {
    var parent;
    pizzaData = document.getElementById('pizzaHolder');
    parent = pizzaData.parentNode;
    parent.removeChild(pizzaData);
    parent.appendChild(restaurants[num].generatePizzaTable());
    storeData = document.getElementById('storeHolder');
    parent = storeData.parentNode;
    parent.removeChild(storeData);
    parent.appendChild(restaurants[num].generateStoreData());
}

function createNavList() {
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
    for (var l in restaurants) {
        addLiById('navList',restaurants[l].storeLocation, l)
    }
}

//
//  BEGIN app logic.
//


var restaurants = [];
for (var i=0;i < restaurantData.length;i++) {
    restaurants[i] = new Restaurant (restaurantData[i]);
}
createNavList();

var pizzaData = document.getElementById('pizzaId');
var storeData = document.getElementById('storeId');
var totalData = document.getElementById('pizzaTotal');
pizzaData.appendChild (restaurants[0].generatePizzaTable());
storeData.appendChild (restaurants[0].generateStoreData());
totalData.innerHTML = getPizzaTotals();
