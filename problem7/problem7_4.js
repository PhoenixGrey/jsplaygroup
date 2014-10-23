/*
    Point:  Global variable is DANGEROUS!!!!
*/

'use strict';

var add1 = function() {
  var c1 = 0;
  return ++c1;
}


console.log(add1());  //1
console.log(add1());  //1

var c2 = 0;
var add2 = function() {
  return ++c2;
}


console.log(add2());  //1
//c2 = "what the hell";
console.log(add2());  //2
console.log(add2());  //3



var add3 = (function() {
  var c3 = 0;
  return function() {
    return ++c3;
  }
})();


console.log(add3());  //1
//c3 = "what the hell";
console.log(add3());  //2
console.log(add3());  //3

