  /*var leapYear = function (year) {
    if (year%4==0) {
       console.log(`Given year ${year}:Leap year`);
      } else {if ( year=== undefined || isNaN(year) ) {
        
        console.log(`Given Input:${year}:Invalid Input`);
        
    } else {if (year) {
        console.log(`Given year ${year} : Not a Leap year`);
    }
           {
            
          }
     }
        
      }
  }
  leapYear(2020);
 leapYear(1999);
  leapYear(1600);
  leapYear(2022);
  leapYear(1945);
  leapYear(null);
  leapYear("twenty twenty");
  leapYear(undefined);
  leapYear(NaN)*/


  
var leapYear = function (year){
    if (year==null||year==undefined||isNaN(year)) {
        console.log(`Invalid input:${year}`);
    } else {if (year%4==0) {
        console.log(`Given year is leap year:${year}`);
    } else {
        console.log(`Given year is not a leap year: ${year}`);
    }
        
    }
} 
leapYear(2020);
leapYear(1999);
 leapYear(1600);
 leapYear(2022);
 leapYear(1945);
 leapYear(null);
 leapYear("twenty twenty");
 leapYear(undefined);
 leapYear(NaN)
