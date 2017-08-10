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

    newRow.innerHTMl = this.name;
    table.appendChild(newRow);

    var title = document.createElement('td');
    title.innerHTML = this.name;
    table.appendChild(title);

    for (var i = 0; i < 15; i++) {

        var aLi = document.createElement('td');
        aLi.innerHTML = this.cookieArray[i];
        table.appendChild(aLi);

    }
    // getting total number and appending it to table

    // var table = document.getElementById( 'stores' );
    // var hourlyTotalRow = document.createElement( 'tr' );

    // var hourlyHeader = document.createElement( 'th' );

    // hourlyHeaderRow.appendChild( hourlyHeader );
    // table.appendChild( hourlyTotalRow );

    // for (var i = 0; i < 15; i++){
    //     var newCell = document.createElement( 'td' );

    //     var colTotal = this.getTotal

    // for(var i = 0; i < allStores.length; i++){
    //    allStores.cookieArray[i];
    // }

    //     newCell.innerText = colTotal;
    //     hourlyTotalRow.appendChild( newCell);
    // }
}
var pdxAirport = new Store( 'PDX Airport', 23, 65, 6.3 );
var pioneer = new Store( 'Pioneer Square', 3, 24, 1.2 );
var powell = new Store( 'Powell', 11, 38, 3.7 );
var john = new Store( 'St. Johns', 11, 38, 3.7 );
var waterfront = new Store( 'Waterfront', 2, 16, 4.6 );


// allStores = ()


// function renderHourlyTotal () {

    // loop over columns -
// create a row 
// gwt total per column
// create a <td>, give the total
// append each one to the row   

// append row to table

// }



























