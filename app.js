var pdxAirport= {
    minCustomer: 23,
    maxCustomer: 65,
    avgCustomer: 6.3,

    customerPerHour: function () {
         return Math.floor (Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer ;
    },
      
    totalCookiesPH: function () {   

        var cookieArray = [];


    cookieArray.push (Math.floor( this.customerPerHour() * this.avgCustomer ));

   
    return cookieArray

    },


    addToDom: function () {

        var timeArray = ['6 am : ', '7 am : ', '8 am : ', '9 am : ', '10 am : ', '11 am : ', '12 pm : ', '1 pm : ', 
                    '2 pm : ', '3 pm : ', '4 pm : ', '5 pm : ', '6 pm : ', '7 pm : ', '8 pm : '];

        for ( var i = 0; i < 15; i++){

   var airport1= document.getElementById( 'airport' );
    var aLi= document.createElement( 'li' );
    aLi.innerHTML= timeArray[i] + this.totalCookiesPH();
    airport1.appendChild( aLi );
        }
    }


    
};

pdxAirport.addToDom();






 


















