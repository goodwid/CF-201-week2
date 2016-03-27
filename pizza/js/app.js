var exports = {};

var restaurantData = [
    ["Beaverton",[8,26], "Tuesday - Sunday, closed on Mondays", "Bob Jones", "images/jones.jpg", "555-34-PIZZA", [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]], [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]]],
    ["Hillsboro",[8,26], "Tuesday - Sunday, closed on Mondays", "Edward Montgomery", "images/montgomery.jpg", "555-21-PIZZA", [[1,3],[5,9],[2,13],[18,32],[1,3],[8,20]], [[1,7],[2,8],[1,6],[3,9],[5,12],[6,16]]],
    ["Downtown",[8,26], "Tuesday - Sunday, closed on Mondays", "Fred Smith", "images/smith.jpg", "555-99-PIZZA", [[0,4],[0,7],[2,15],[10,26],[8,22],[0,2]], [[0,4],[0,4],[1,4],[4,6],[7,15],[2,8]]],
    ["Northeast",[8,26], "Tuesday - Sunday, closed on Mondays", "Angela Harper", "images/harper.jpg", "555-11-PIZZA", [[0,4],[0,7],[5,15],[25,39],[22,36],[5,21]], [[0,4],[0,4],[0,4],[13,18],[5,22],[16,31]]],
    ["Clackamas",[8,26], "Tuesday - Sunday, closed on Mondays", "Walter Cartwright", "images/cartwright.jpg", "555-86-PIZZA", [[2,7],[3,8],[1,5],[5,13],[22,41],[15,20]], [[3,5],[3,9],[1,4],[2,4],[15,42],[6,21]]],
    ["PDX-Airport",[8,26], "Tuesday - Sunday, closed on Mondays", "Cindy Walker", "images/walker.jpg", "555-PDX-PIES", [[0,4],[0,7],[2,15],[6,9],[4,8],[2,4]], [[0,4],[0,4],[1,4],[5,18],[2,5],[3,11]]]
];

// Restaurant object constructor
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
    this.dataStorage = null;
    this.retrieveData = function () {
        if (this.dataStorage === null) {
            this.dataStorage = this.createData();
            return this.dataStorage;
        } else {
            return this.dataStorage;
        }
    };
    // this.retrieveData()
    this.createData = function () {
        var open = parseInt(this.hoursOpen[0]);
        var close = parseInt(this.hoursOpen[1]);
        var pizzaCount = this.pizzaCount;
        var deliveryCount = this.deliveryCount;
        var hour,pLow,pHigh,dLow,dHigh,pizzas,deliveries,drivers;
        var blockcount=0; // Determines which block to use based on the hour, assuming each block is 3 hours long.
        var results = [];
        for (hour = open ; hour < close ; hour++) {
            pLow = parseInt(pizzaCount[(blockcount-blockcount%3)/3][0]);
            pHigh = parseInt(pizzaCount[(blockcount-blockcount%3)/3][1]);
            dLow = parseInt(deliveryCount[(blockcount-blockcount%3)/3][0]);
            dHigh = parseInt(deliveryCount[(blockcount-blockcount%3)/3][1]);
            pizzas = randomRange(pLow,pHigh);                 // randomRange() is loaded in compute.js
            this.locationTotal += pizzas;
            deliveries=randomRange(dLow,Math.min(dHigh,pizzas));
            drivers = driversCalc(deliveries);
            results.push ([hour,pizzas,deliveries,drivers]);
            blockcount++;
        } // for i
        return results;
    };
    this.generatePizzaTable = function () {
        var storeData = this.retrieveData();
        var total = 0;

        var newDiv = document.createElement('div');
        newDiv.setAttribute('id','pizzaHolder');

        var newHeading = document.createElement('h3');
        var newHeadingText = document.createTextNode('Location: ' + this.storeLocation);
        newHeading.appendChild(newHeadingText);
        newDiv.appendChild(newHeading);

        var newTable = document.createElement('table');
        var newHeadRow = createTrEl();
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
        newRow = createTrEl();
        newRow.appendChild (createTdEl('Total:'));
        newRow.appendChild (createTdEl(total));
        newTable.appendChild(newRow);
        this.LocationTotal = total;
        newDiv.appendChild(newTable);
        return (newDiv);
    };
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
    };
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
};
var createUlEl = function () {
    var newUl = document.createElement('ul');
    return newUl;
};// createUlEl
var createLiEl = function (data) {
    var newLi = document.createElement('li');
    var newLiText = document.createTextNode(data);
    newLi.appendChild(newLiText);
    return newLi;
};

function getPizzaTotals () {
    var runningSlotTotal= new Array([]);
    var weeklyTotal = 0;
    var slotTotal = [];
    for (var d=0;d<26;d++) {
        slotTotal[d] = 0;
    }
    var sopen,sclose;
    for (var i =0;i < restaurants.length;i++) {
        console.log('i in getPizzaTotals: ',i);
        weeklyTotal += restaurants[i].locationTotal;
        sopen = restaurants[i].hoursOpen[0];
        sclose = restaurants[i].hoursOpen[1];
        for (var k=0;k<26;k++) {
            runningSlotTotal[k] =0;
        }
        for (hour = sopen ; hour < sclose ; hour++) {
            runningSlotTotal[hour]=restaurants[i].retrieveData()[hour-sopen][1];
        }
        for (var j=0;j<26;j++) {
            slotTotal[j] += runningSlotTotal[j];
        }
    }
    return [weeklyTotal,slotTotal];
}

function generateWeeklyTotalsTable (arr) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id','pizzaHolder');

    newHeading = document.createElement('h3');
    newHeadingText = document.createTextNode('Totals by Timeslot');
    newHeading.appendChild(newHeadingText);
    newDiv.appendChild(newHeading);

    newTable = document.createElement('table');
    newHeadRow = createTrEl();
    newHeadRow.appendChild (createThEl('Time'));
    newHeadRow.appendChild (createThEl('Total Pizzas'));
    newTable.appendChild (newHeadRow);
    for (j=8;j<arr.length;j++) {
        newRow = createTrEl();
        if (j>23){
            newRow.appendChild (createTdEl((j-24) + ':00'));
        } else {
            newRow.appendChild (createTdEl(j + ':00'));
        }
        newRow.appendChild (createTdEl(arr[j]));
        newTable.appendChild (newRow);
    } // for j
    newDiv.appendChild(newTable);
    return newDiv;
}

function displayTable (num) {
    var parentp,parentS,tempResult;
    pizzaData = document.getElementById('pizzaHolder');
    storeData = document.getElementById('storeHolder');
    parentP = pizzaData.parentNode;
    parentS = storeData.parentNode;
    parentP.removeChild(pizzaData);
    parentS.removeChild(storeData);
    if (num == -1) {
        tempResult = getPizzaTotals()
        console.log(tempResult);
        parentP.appendChild(generateWeeklyTotalsTable(tempResult[1]));
        var blankDiv = document.createElement('div');
        blankDiv.setAttribute('id','storeHolder');
        parentS.appendChild(blankDiv);
    } else {
        parentP.appendChild(restaurants[num].generatePizzaTable());
        parentS.appendChild(restaurants[num].generateStoreData());
    }
}

function addLiById (DOMlocation,textToAdd,num) {
    if (DOMlocation !== null) {  // only create the DOM elements if the parent exists to attach them to.
        var newLi = document.createElement('li');
        var newA = document.createElement('a');
        var newAText = document.createTextNode(textToAdd);
        newA.appendChild(newAText);
        newA.setAttribute('href','#');
        newA.setAttribute('id',num);
        newLi.appendChild(newA);
        DOMlocation.appendChild(newLi);
    }
}

function initialCreateNavList(DOMlocation) {
    for (var l in restaurants) {
        addLiById(DOMlocation,restaurants[l].storeLocation, l);
    }
    addLiById(DOMlocation,'Totals by Timeslot',-1);
}

//
//  BEGIN app logic.
//

var restaurants = [];
for (var i=0;i < restaurantData.length;i++) {
    restaurants[i] = new Restaurant (restaurantData[i]);
    restaurants[i].retrieveData();
}

var navUl = document.getElementById('navList');
initialCreateNavList(navUl);
navUl.addEventListener("click", function(e) {
    if (e.target.childElementCount === 0){
        displayTable (e.target.id);
    }
}, false);

var buttonCheck = document.getElementById('formButton');
buttonCheck.addEventListener("click", function() {
    var newManagerName = document.getElementById('managerName').value;
    var newStoreName = document.getElementById('storeName').value;
    var newDaysOpen = document.getElementById('daysOpen').value;
    var newHoursOpen = document.getElementById('hoursOpen').value;
    var newHoursClosed = document.getElementById('hoursClosed').value;
    var newStorePhone = document.getElementById('storePhone').value;
    var newPizzaSeed = document.getElementById('pizzaSeed').value;
    var newDeliverySeed = document.getElementById('deliverySeed').value;
    var newManagerImage = document.getElementById('managerImage').value;
    var pizzaSeedArray = newPizzaSeed.split(" ");
    var targetArrayPizza = [];
    for (var i = 0; i < pizzaSeedArray.length; i++) {
        targetArrayPizza.push(pizzaSeedArray[i].split(","));
    }


    var deliverySeedArray = newDeliverySeed.split(" ");
    var targetArrayDelivery = [];
    for (var i = 0; i < deliverySeedArray.length; i++) {
        targetArrayDelivery.push(deliverySeedArray[i].split(","));
    }

    var results = [];
    results.push(newStoreName, [newHoursOpen, newHoursClosed], newDaysOpen, newManagerName, newManagerImage, newStorePhone, targetArrayPizza, targetArrayDelivery);
    var IP = restaurants.length;
    restaurants[IP] = new Restaurant(results);

    addLiById (navUl,restaurants[IP].storeLocation,IP);
    restaurants[IP].retrieveData();
    var q = getPizzaTotals();
    totalData.innerHTML = q[0];

}, false); // buttonCheck callback.


var pizzaData = document.getElementById('pizzaId');
var storeData = document.getElementById('storeId');
var totalData = document.getElementById('pizzaTotal');
if (pizzaData) {
    pizzaData.appendChild (restaurants[0].generatePizzaTable());
    storeData.appendChild (restaurants[0].generateStoreData());
}

totalData.innerHTML = getPizzaTotals()[0];


// console.log(m[1]);
