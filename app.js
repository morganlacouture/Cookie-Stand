var pdxAirport= {
    minCustomer: 23,
    maxCustomer: 65,
    avgCustomer: 6.3,

    customerPerHour: function () {
         return Math.floor (Math.random() * (this.maxCustomer - this.minCustomer));
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

    function sum(cookieArray){
        var totes= cookieArray

    }
        
  
    }

    
};

pdxAirport.addToDom();



var pioneerSquare= {
    minCustomer: 3,
    maxCustomer: 24,
    avgCustomer: 1.2,

    customerPerHour: function () {
         return Math.floor (Math.random() * (this.maxCustomer - this.minCustomer));
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

   var airport1= document.getElementById( 'pioneer' );
    var aLi= document.createElement( 'li' );
    aLi.innerHTML= timeArray[i] + this.totalCookiesPH();
    airport1.appendChild( aLi );

        }
  
    }

    
};

pioneerSquare.addToDom();


var powell= {
    minCustomer: 11,
    maxCustomer: 38,
    avgCustomer: 3.7,

    customerPerHour: function () {
         return Math.floor (Math.random() * (this.maxCustomer - this.minCustomer));
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

   var airport1= document.getElementById( 'powell' );
    var aLi= document.createElement( 'li' );
    aLi.innerHTML= timeArray[i] + this.totalCookiesPH();
    airport1.appendChild( aLi );

        }
  
    }

    
};

powell.addToDom();

var johns= {
    minCustomer: 11,
    maxCustomer: 38,
    avgCustomer: 3.7,

    customerPerHour: function () {
         return Math.floor (Math.random() * (this.maxCustomer - this.minCustomer));
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

   var airport1= document.getElementById( 'johns' );
    var aLi= document.createElement( 'li' );
    aLi.innerHTML= timeArray[i] + this.totalCookiesPH();
    airport1.appendChild( aLi );

        }
  
    }

    
};

johns.addToDom();

var waterfront= {
    minCustomer: 2,
    maxCustomer: 16,
    avgCustomer: 4.6,

    customerPerHour: function () {
         return Math.floor (Math.random() * (this.maxCustomer - this.minCustomer));
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

   var airport1= document.getElementById( 'waterfront' );
    var aLi= document.createElement( 'li' );
    aLi.innerHTML= timeArray[i] + this.totalCookiesPH();
    airport1.appendChild( aLi );

        }
  
    }

    
};

waterfront.addToDom();





 


















