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

}
var pdxAirport = new Store('airport', 23, 65, 6.3);
var pioneer = new Store('pioneer', 3, 24, 1.2);
var powell = new Store('powell', 11, 38, 3.7);
var john = new Store('johns', 11, 38, 3.7);
var waterfront = new Store('waterfront', 2, 16, 4.6);































