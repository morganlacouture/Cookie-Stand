function Store  (name, minCustomer, maxCustomer, avCustomer) {
    this.name= name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avCustomer = avCustomer;
    this.cookieArray = [];


    this.getTotal = 0;
    this.totalCookiesPH();
    console.log(this.cookieArray)
    this.addToDom();
}

Store.prototype.customerPerHour= function (){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
}

Store.prototype.totalCookiesPH = function (){
    for (var i = 0; i < 15; i++){
        this.cookieArray.push(Math.floor(this.customerPerHour() * this.avCustomer));
    
                console.log (this.avCustomer)
    }
}

Store.prototype.sum = function (){
    for (var i = 0; i < 15; i++){
        this.getTotal = this.cookieArray[i] + this.getTotal;
    }

    return this.getTotal;
}

Store.prototype.addToDom = function(){
    // timeArray = ['6 am : ', '7 am : ', '8 am : ', '9 am : ', '10 am : ', '11 am : ', '12 pm : ', '1 pm : ',
    //         '2 pm : ', '3 pm : ', '4 pm : ', '5 pm : ', '6 pm : ', '7 pm : ', '8 pm : '];

                var table = document.getElementById('stores');
                var newRow = document.createElement('tr');
                // newRow.setAttribute('id', this.id);
                newRow.innerHTMl = this.name;
                table.appendChild(newRow);

                var title = document.createElement( 'td' );
                title.innerHTML= this.name;
                table.appendChild(title);
            
            for (var i =0; i < 15; i++){
            
                var aLi = document.createElement( 'td' );
                aLi.innerHTML=  this.cookieArray[i];
                table.appendChild( aLi );

            }
            // var aLi = document.createElement( 'td' );
            // aLi.innerHTML = 'Total : ' + this.sum();
            // airport1.appendChild(aLi);

            // for (var i = 0; i < 15; i++){

}
var pdxAirport = new Store ('airport', 23, 65,6.3);
var pioneer = new Store ('pioneer',3, 24, 1.2);
var powell = new Store ('powell',11, 38, 3.7);
var john = new Store ('johns',11, 38, 3.7);
var waterfront = new Store ('waterfront', 2, 16, 4.6);















// var pdxAirport = {
//     minCustomer: 23,
//     maxCustomer: 65,
//     avgCustomer: 6.3,
//     cookieArray: [],
//     getTotal: 0,

//     customerPerHour: function () {
//         return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//     },

//     totalCookiesPH: function () {

//         for (var i = 0; i < 15; i++){

//         this.cookieArray.push(Math.floor(this.customerPerHour() * this.avgCustomer));
//         }

//     },

    // sum: function () {
    //     for (var i = 0; i < 15; i++) {
    //         this.getTotal = this.cookieArray[i] + this.getTotal;
    //     }

    //     return this.getTotal;
    // },

//     addToDom: function () {

//         this.totalCookiesPH();

//         var timeArray = ['6 am : ', '7 am : ', '8 am : ', '9 am : ', '10 am : ', '11 am : ', '12 pm : ', '1 pm : ',
//             '2 pm : ', '3 pm : ', '4 pm : ', '5 pm : ', '6 pm : ', '7 pm : ', '8 pm : '];

//         for (var i = 0; i < 15; i++) {

//             var airport1 = document.getElementById('airport');
//             var aLi = document.createElement('li');
//             aLi.innerHTML = timeArray[i] + this.cookieArray[i];
//             airport1.appendChild(aLi);
//         }


//         var airport1 = document.getElementById('airport');
//         var aLi = document.createElement('li');
//         aLi.innerHTML = ('Total : ' + this.sum());
//         airport1.appendChild(aLi);
//     },



// }

// pdxAirport.addToDom();


// var pioneerSquare = {
//     minCustomer: 3,
//     maxCustomer: 24,
//     avgCustomer: 1.2,

//     customerPerHour: function () {
//         return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer));
//     },

//     totalCookiesPH: function () {

//         var cookieArray = [];


//         cookieArray.push(Math.floor(this.customerPerHour() * this.avgCustomer));


//         return cookieArray

//     },


//     addToDom: function () {

//         var timeArray = ['6 am : ', '7 am : ', '8 am : ', '9 am : ', '10 am : ', '11 am : ', '12 pm : ', '1 pm : ',
//             '2 pm : ', '3 pm : ', '4 pm : ', '5 pm : ', '6 pm : ', '7 pm : ', '8 pm : '];

//         for (var i = 0; i < 15; i++) {

//             var airport1 = document.getElementById('pioneer');
//             var aLi = document.createElement('li');
//             aLi.innerHTML = timeArray[i] + this.totalCookiesPH();
//             airport1.appendChild(aLi);

//         }

//     }


// };

// pioneerSquare.addToDom();


// var powell = {
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCustomer: 3.7,

//     customerPerHour: function () {
//         return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer));
//     },

//     totalCookiesPH: function () {

//         var cookieArray = [];


//         cookieArray.push(Math.floor(this.customerPerHour() * this.avgCustomer));


//         return cookieArray

//     },


//     addToDom: function () {

//         var timeArray = ['6 am : ', '7 am : ', '8 am : ', '9 am : ', '10 am : ', '11 am : ', '12 pm : ', '1 pm : ',
//             '2 pm : ', '3 pm : ', '4 pm : ', '5 pm : ', '6 pm : ', '7 pm : ', '8 pm : '];

//         for (var i = 0; i < 15; i++) {

//             var airport1 = document.getElementById('powell');
//             var aLi = document.createElement('li');
//             aLi.innerHTML = timeArray[i] + this.totalCookiesPH();
//             airport1.appendChild(aLi);

//         }

//     }


// };

// powell.addToDom();


// var johns = {
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCustomer: 3.7,

//     customerPerHour: function () {
//         return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer));
//     },

//     totalCookiesPH: function () {

//         var cookieArray = [];


//         cookieArray.push(Math.floor(this.customerPerHour() * this.avgCustomer));


//         return cookieArray

//     },


//     addToDom: function () {

//         var timeArray = ['6 am : ', '7 am : ', '8 am : ', '9 am : ', '10 am : ', '11 am : ', '12 pm : ', '1 pm : ',
//             '2 pm : ', '3 pm : ', '4 pm : ', '5 pm : ', '6 pm : ', '7 pm : ', '8 pm : '];

//         for (var i = 0; i < 15; i++) {

//             var airport1 = document.getElementById('johns');
//             var aLi = document.createElement('li');
//             aLi.innerHTML = timeArray[i] + this.totalCookiesPH();
//             airport1.appendChild(aLi);

//         }

//     }


// };

// johns.addToDom();


// var waterfront = {
//     minCustomer: 2,
//     maxCustomer: 16,
//     avgCustomer: 4.6,

//     customerPerHour: function () {
//         return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer));
//     },

//     totalCookiesPH: function () {

//         var cookieArray = [];


//         cookieArray.push(Math.floor(this.customerPerHour() * this.avgCustomer));


//         return cookieArray

//     },


//     addToDom: function () {

//         var timeArray = ['6 am : ', '7 am : ', '8 am : ', '9 am : ', '10 am : ', '11 am : ', '12 pm : ', '1 pm : ',
//             '2 pm : ', '3 pm : ', '4 pm : ', '5 pm : ', '6 pm : ', '7 pm : ', '8 pm : '];

//         for (var i = 0; i < 15; i++) {

//             var airport1 = document.getElementById('waterfront');
//             var aLi = document.createElement('li');
//             aLi.innerHTML = timeArray[i] + this.totalCookiesPH();
//             airport1.appendChild(aLi);

//         }

//     }


// };

// waterfront.addToDom();
























