/*

  Point1: Lexical scopes 
    Javascript has lexcially level scope. This means functions run in the scope they are defined in, not the scope they are excuted in.
  
  Point2: Closure
    Keep in your mind: (function(){})();

*/


'use strict';

var a = 4;
var b = 5;

var closure1 = (function() {
  var a = 1;
  var b = 2;
  
  return function() {
    return a+b;
  } 
}());

console.log(closure1());


var closure2 = (function() {
 
  return function() {
    return a+b;
  } 
}());

console.log(closure2());

var closure3 = (function() {
  var a = 1;
  var b = 2;

  return function() {
    var a = 8;
    var b = 9;
    return a+b;
  } 
}());

console.log(closure3());

