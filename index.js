const returnFirstTwoDrivers = function(oldArray){
    return oldArray.slice(0,2);
}
const returnLastTwoDrivers = function(oldArray){
    return oldArray.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(i){
   return function(n) {
     return i * n;
   };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(oldArray, selector){
    return selector(oldArray);
}