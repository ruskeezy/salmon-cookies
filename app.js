'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeLocations = [];

function Store(name, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust, tableId) {
  this.name = name;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.tableId = tableId;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;
  this.calcCustsEachHour = function(){
    for(var i = 0; i < storeHours.length; i++){
      this.custsEachHour.push(this.minCustsPerHour, this.maxCustsPerHour);
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
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    var tblBody = document.createElement('tbody');

    for(var i = 0; i < 15; i++){
      var row = document.createElement('tr');
      for(var j = 0; j < 15; j++){
        var cell = document.createElement('td');
        var cellText = this.calcCustsEachHour();
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
  };
  storeLocations.push(this);
};

new Store()

// var seatacAirport = {
//   name: 'SeaTac Airport',
//   minCustsPerHour: 3,
//   maxCustsPerHour: 24,
//   avgCookiesPerCust: 1.2,
//   custsEachHour: [],
//   cookiesEachHour: [],
//   totalDailySales: 0,
//   calcCustsEachHour: function(){
//     for(var i = 0; i < storeHours.length; i++){
//       this.custsEachHour.push(this.minCustsPerHour, this.maxCustsPerHour);
//     }
//   },
//   calcCookiesEachHour: function(){
//     this.calcCustsEachHour();
//     for(var i = 0; i < storeHours.length; i++){
//       var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
//       console.log(oneHour, 'One Hour')
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailySales += oneHour;
//       console.log(this.totalDailySales, 'Total');
//     }
//   },
//   render: function(){
//     this.calcCookiesEachHour();
//     var ulEl = document.getElementById('seatac');
//     // console.log(ulEl, 'ulEl');
//     for(var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
//     ulEl.appendChild(liEl);
//   }
// }
//
// var seattleCenter = {
//   name: 'Seattle Center',
//   minCustsPerHour: 11,
//   maxCustsPerHour: 38,
//   avgCookiesPerCust: 3.7,
//   custsEachHour: [],
//   cookiesEachHour: [],
//   totalDailySales: 0,
//   calcCustsEachHour: function(){
//     for(var i = 0; i < storeHours.length; i++){
//       this.custsEachHour.push(this.minCustsPerHour, this.maxCustsPerHour);
//     }
//   },
//   calcCookiesEachHour: function(){
//     this.calcCustsEachHour();
//     for(var i = 0; i < storeHours.length; i++){
//       var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
//       console.log(oneHour, 'One Hour')
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailySales += oneHour;
//       console.log(this.totalDailySales, 'Total');
//     }
//   },
//   render: function(){
//     this.calcCookiesEachHour();
//     var ulEl = document.getElementById('sc');
//     // console.log(ulEl, 'ulEl');
//     for(var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
//     ulEl.appendChild(liEl);
//   }
// }
//
// var capitolHill = {
//   name: 'Capitol Hill',
//   minCustsPerHour: 20,
//   maxCustsPerHour: 38,
//   avgCookiesPerCust: 2.3,
//   custsEachHour: [],
//   cookiesEachHour: [],
//   totalDailySales: 0,
//   calcCustsEachHour: function(){
//     for(var i = 0; i < storeHours.length; i++){
//       this.custsEachHour.push(this.minCustsPerHour, this.maxCustsPerHour);
//     }
//   },
//   calcCookiesEachHour: function(){
//     this.calcCustsEachHour();
//     for(var i = 0; i < storeHours.length; i++){
//       var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
//       console.log(oneHour, 'One Hour')
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailySales += oneHour;
//       console.log(this.totalDailySales, 'Total');
//     }
//   },
//   render: function(){
//     this.calcCookiesEachHour();
//     var ulEl = document.getElementById('cap-hill');
//     // console.log(ulEl, 'ulEl');
//     for(var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
//     ulEl.appendChild(liEl);
//   }
// }
//
// var alki = {
//   name: 'Alki',
//   minCustsPerHour: 2,
//   maxCustsPerHour: 16,
//   avgCookiesPerCust: 4.6,
//   custsEachHour: [],
//   cookiesEachHour: [],
//   totalDailySales: 0,
//   calcCustsEachHour: function(){
//     for(var i = 0; i < storeHours.length; i++){
//       this.custsEachHour.push(this.minCustsPerHour, this.maxCustsPerHour);
//     }
//   },
//   calcCookiesEachHour: function(){
//     this.calcCustsEachHour();
//     for(var i = 0; i < storeHours.length; i++){
//       var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
//       console.log(oneHour, 'One Hour')
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailySales += oneHour;
//       console.log(this.totalDailySales, 'Total');
//     }
//   },
//   render: function(){
//     this.calcCookiesEachHour();
//     var ulEl = document.getElementById('alki');
//     // console.log(ulEl, 'ulEl');
//     for(var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
//     ulEl.appendChild(liEl);
//   }
// }
//
