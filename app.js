function Store(name, minCustomer, maxCustomer, avCustomer) {
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avCustomer = avCustomer;
    this.cookieArray = [];


    this.getTotal = 0;
    this.totalCookiesPH();
    console.log(this.cookieArray)
    this.addToDom();
    this.sum();
}

Store.prototype.customerPerHour = function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
}

Store.prototype.totalCookiesPH = function () {
    for (var i = 0; i < 15; i++) {
        this.cookieArray.push(Math.floor(this.customerPerHour() * this.avCustomer));

        console.log(this.avCustomer)
    }
}

// Total Function
Store.prototype.sum = function () {
    for (var i = 0; i < 15; i++) {
        this.getTotal = this.cookieArray[i] + this.getTotal;
    }

    return this.getTotal;
}

Store.prototype.addToDom = function () {


    var table = document.getElementById('stores');
    var newRow = document.createElement('tr');

    table.appendChild(newRow);

    var title = document.createElement('td');
    title.innerHTML = this.name;
    newRow.appendChild(title);

    for (var i = 0; i < 15; i++) {

        var aLi = document.createElement('td');
        aLi.innerHTML = this.cookieArray[i];
        newRow.appendChild(aLi);
    }

var sum = document.createElement( 'td' );
sum.innerHTML = this.sum();
newRow.appendChild( sum );
   
}

function hourlyTotals(){

    var tbody = document.getElementById( 'stores' );
    var hourlyTotRow = document.createElement( 'tr' );
    var hourlyHeader = document.createElement( 'th' );
    hourlyHeader.innerText = 'Hourly Totals';
    hourlyTotRow.appendChild( hourlyHeader );

    for (var i = 0; i < 15; i ++) {
        var newCell = document.createElement( 'td' );
        var colTotal = 0;

        for (var j = 0; j < allShops.length; j++){
            colTotal += allShops[j].cookieArray[i];
        }

        newCell.innerText = colTotal;
        hourlyTotRow.appendChild( newCell );
    }

    tbody.appendChild( hourlyTotRow );
}



var pdxAirport = new Store( 'PDX Airport', 23, 65, 6.3 );
var pioneer = new Store( 'Pioneer Square', 3, 24, 1.2 );
var powell = new Store( 'Powell', 11, 38, 3.7 );
var john = new Store( 'St. Johns', 11, 38, 3.7 );
var waterfront = new Store( 'Waterfront', 2, 16, 4.6 );
var allShops = [pdxAirport, pioneer, powell, john, waterfront]
hourlyTotals();




// Adding form feature to add a new store location:

var form = document.getElementById( 'addStore' );

form.addEventListener( 'click', formHandler);

function formHandler(){

    console.log( event )

};






























