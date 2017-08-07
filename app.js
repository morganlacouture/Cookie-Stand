var pdxAirport= {
    minCustomer: 23,
    maxCustomer: 65,
    avgCustomer: 6.3,

    customerPerHour: function () {
         return Math.floor (Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer ;
    },
      
    totalCookiesPH: function () {   

        var cookieArray = [];

    for (var i = 14; i > 0; i--) {

    cookieArray.push (Math.floor( this.customerPerHour() * this.avgCustomer ));

    }

    return cookieArray

    },

    addToDom: function () {
   var airport1= document.getElementById( 'airport' );
    var aLi= document.createElement( 'li' );
    aLi.innerHTML= '6am: 163 cookies';
    airport1.appendChild( aLi );

    }

    
};

pdxAirport.addToDom();






 


















