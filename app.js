var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']



function getSales(storeName) {
  return Math.floor(storeName.hourlyCustomers(storeName.maxCust, storeName.minCust) * storeName.cookieAVG);
}

var pike = {
  hourlies: [],
  minCust: 23,
  maxCust: 65,
  cookieAVG: 6.3,
  hourlyCustomers: function(min,max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
}

var seaTac = {
  hourlies: [],
  minCust: 3,
  maxCust: 24,
  cookieAVG: 1.2,
  hourlyCustomers: function(min,max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
}

var seaCenter = {
  hourlies: [],
  minCust: 11,
  maxCust: 38,
  cookieAVG: 3.7,
  hourlyCustomers: function(min,max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
}

var capHill = {
  hourlies: [],
  minCust: 20,
  maxCust: 38,
  cookieAVG: 2.3,
  hourlyCustomers: function(min,max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
}

var alki = {
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


function makeHTML() {
  var container = document.createElement('div');
  container.innerHTML = '<p>' + pike.hourlies + '</p>';
  container.innerHTML = '<p>' + seaTac.hourlies + '</p>';
  container.innerHTML = '<p>' + seaCenter.hourlies + '</p>';
  container.innerHTML = '<p>' + capHill.hourlies + '</p>';
  container.innerHTML = '<p>' + alki.hourlies + '</p>';


  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  for (var i = 0; i < pike.hourlies.length; i++) {
    listArr.push('<li>' + pike.hourlies[i] + '</li>');
  }

  for (var i = 0; i < seaTac.hourlies.length; i++) {
    listArr.push('<li>' + seaTac.hourlies[i] + '</li>');
  }

  for (var i = 0; i < seaCenter.hourlies.length; i++) {
    listArr.push('<li>' + seaCenter.hourlies[i] + '</li>');
  }

  for (var i = 0; i < capHill.hourlies.length; i++) {
    listArr.push('<li>' + capHill.hourlies[i] + '</li>');
  }

  for (var i = 0; i < alki.hourlies.length; i++) {
    listArr.push('<li>' + alki.hourlies[i] + '</li>');
  }

  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);
}
makeHTML();
