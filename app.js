'use strict';

// arrays and functions

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeLocations = [];
var form = document.getElementById('store-form');
var storeTable = document.getElementById('stores')


function renderStoreRows(){
  for(var i = 0; i < storeLocations.length; i++){
    storeLocations[i].render();
  }
}

function randNum(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// store constructor function

function Store(name, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust){
  this.name = name;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;
  storeLocations.push(this);
  this.calcCustsEachHour = function(){
    for(var i = 0; i < storeHours.length; i++){
      this.custsEachHour.push(randNum(this.minCustsPerHour, this.maxCustsPerHour));
    };
  };
  this.calcCookiesEachHour = function(){
    this.calcCustsEachHour();
    for(var i = 0; i < storeHours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'One Hour')
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'Total');
    };
  };
  this.render = function(){
    this.calcCookiesEachHour();
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);


    for(var i = 0; i < storeHours.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesEachHour[i];
      trEl.appendChild(tdEl);
    };

    tdEl = document.createElement('td');
    tdEl.textContent = this.totalDailySales;
    trEl.appendChild(tdEl);

    storeTable.appendChild(trEl);
  };
};

// creating store instances

new Store('1st and Pike', 23, 65, 6.3, 'pike');
new Store('SeaTac Airport', 3, 24, 1.2, 'seatac');
new Store('Seattle Center', 11, 38, 3.7, 'sc');
new Store('Capitol Hill', 20, 38, 2.3, 'cap-hill');
new Store('Alki Beach', 2, 16, 4.6, 'alki');

// header function

function renderHeader(){
  var thEl = document.createElement('th');
  var trEl = document.createElement('tr');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for( var i = 0; i < storeHours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
  };
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl)
};

// footer section

function renderFooter(){
  var tdEl = document.createElement('td');
  var trEl = document.createElement('tr');
  tdEl.textContent = 'Hourly Totals';
  trEl.appendChild(tdEl);

  for(var i = 0; i < storeHours.length; i++){
    var sum = 0;
    for(var j = 0; j < storeLocations.length; j++){
      sum += storeLocations[j].cookiesEachHour[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = sum;
    trEl.appendChild(tdEl);
  }
  var totalSum = 0;
  for(var k = 0; k < storeLocations.length; k++){
    totalSum += storeLocations[k].totalDailySales;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalSum;
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);
}


renderHeader();
renderStoreRows();
renderFooter();
