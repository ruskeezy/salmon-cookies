var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var pike = {
  hourlies: [],
  minCust: 23,
  maxCust: 65,
  cookieAVG: 6.3,
  hourlySales: function(min,max) {
    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin);
  }
}

var seaTac = {
  hourlies: [],
  minCust: 3,
  maxCust: 24,
  cookieAVG: 1.2,
  hourlySales: function(min,max) {
    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin);
  }
}

var seaCenter = {
  hourlies: [],
  minCust: 11,
  maxCust: 38,
  cookieAVG: 3.7,
  hourlySales: function(min,max) {
    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin);
  }
}

var capHill = {
  hourlies: [],
  minCust: 20,
  maxCust: 38,
  cookieAVG: 2.3,
  hourlySales: function(min,max) {
    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin);
  }
}

var alki = {
  hourlies: [],
  minCust: 2,
  maxCust: 16,
  cookieAVG: 4.6,
  hourlySales: function(min,max) {
    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin);
  }
}

function getHourlies(object) {
  for(var i = 0; i < storeHours.length; i++) {
    console.log(object.hourlySales());
    return object.hourlies.push(object.hourlySales());
  }
}

console.log(pike.hourlies);
