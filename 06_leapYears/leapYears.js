const leapYears = function(argYear) {

    const year = argYear;
    let contender = null;
    let isLeapYear = null;

   if (year % 4 == 0 && year % 100 != 0){
    return isLeapYear = true;
   
   }

   if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
    return isLeapYear = true;
   }

    return isLeapYear = false;

};

// Do not edit below this line
module.exports = leapYears;
