/*

  There are two basic scopes 
    1. Global scope

    2. Function scope
    Javascript has function level scope. This means a variable defined within a function is not accessible outside of it.

*/


'use strict';
var y1;
console.log("Initial value of y1 is: " + y1);       //undefined


var y2 = 2;

var y3; 
console.log("Initial value of y3 is:" + y3);        //undefined

function fn() {
  y1 = 1;
  var y3 = 3;
  var y4 = 4;
  console.log("print y1 inside of fn: " + y1);        // 1
  console.log("print y2 inside of fn: " + y2);        // 2
  console.log("print y3 inside of fn: " + y3);        // 3
  console.log("print y4 inside of fn: " + y4);        // 4
}

fn();

console.log("print y1 outside of fn: " + y1);         // 1
console.log("print y2 outside of fn: " + y2);         // 2
console.log("print y3 outside of fn: " + y3);         // undefined 
console.log("print y4 outside of fn: " + y4);         // error



/*
  Conclusion:
    1. y1, y2, y3 are global variable
    2. fn has inner variables which are y3, y4
    3. fn can access global varibales y1, y2, y3
    4. y3, y4 in fn can not be accessed outside of fn
    5. y3 in fn is different from y3 in global scope 
*/
