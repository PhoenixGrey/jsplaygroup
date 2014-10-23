/*

  Point1: There are two strict modes, which are 
    1. script mode
    2. function mode
*/



/*
  Point2: In strict mode, the global variable has to be declared. 
*/


//'use strict';
function fn_without_strict() {
  y1 = 1;
}

fn_without_strict();

console.log(y1);

var y2;
function fn() {
  'use strict';
  y2 = 2;
}

fn();

console.log(y2);

function fn_with_strict() {
  'use strict';
  y3 = 3;
}

fn_with_strict();

console.log(y3);

