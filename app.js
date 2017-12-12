'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function getSales(storeName) {
  return Math.floor(storeName.hourlyCustomers(storeName.maxCust, storeName.minCust) * storeName.cookieAVG);
}

var pike = {
  name: '1st and Pike',
  hourlies: [],
  minCust: 23,
  maxCust: 65,
  cookieAVG: 6.3,
  hourlyCustomers: function(min,max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
}

var seaTac = {
  name: 'SeaTac Airport',
  hourlies: [],
  minCust: 3,
  maxCust: 24,
  cookieAVG: 1.2,
  hourlyCustomers: function(min,max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
}

var seaCenter = {
  name: 'Seattle Center',
  hourlies: [],
  minCust: 11,
  maxCust: 38,
  cookieAVG: 3.7,
  hourlyCustomers: function(min,max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
}

var capHill = {
  name: 'Capitol Hill',
  hourlies: [],
  minCust: 20,
  maxCust: 38,
  cookieAVG: 2.3,
  hourlyCustomers: function(min,max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
}

var alki = {
  name: 'Alki Beach',
  hourlies: [],
  minCust: 2,
  maxCust: 16,
  cookieAVG: 4.6,
  hourlyCustomers: function(min,max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
}

function getHourlies(store) {
  for(var i = 0; i < storeHours.length; i++) {
   store.hourlies.push(getSales(store));
  }
  console.log(store);
}


function makeHTML(store) {
  var container = document.createElement('div');
  container.innerHTML = '<p>' + store.name + '</p>';

  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  for (var i = 0; i < store.hourlies.length; i++) {
    listArr.push('<li>' + storeHours[i] + ': ' + store.hourlies[i] + ' cookies' + '</li>');
  }

  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);
}

// fills arrays and prints arrays

getHourlies(pike);
getHourlies(seaTac);
getHourlies(seaCenter);
getHourlies(capHill);
getHourlies(alki);

makeHTML(pike);
makeHTML(seaTac);
makeHTML(seaCenter);
makeHTML(capHill);
makeHTML(alki);
