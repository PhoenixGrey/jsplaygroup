function fn(args, name, cb) {
  console.log("Running " + name + " function and it will callback in " + args + "ms");
  setTimeout(function() {cb(null, args, name)}, args);
} 

/*
var len = 5;
for(var i=0; i<len; i++) {
  fn(500, i+"th", function(err, args, name) {
    console.log("callback of " + name + " function is called in " + args + "ms");
  });
}
*/


/*
 * Problem 2 
 *  The next fn will be run before the previous callback finishes
 *  And the requirement is to run next function when callback of previous one is finished 
 */



/* Solution 2_3 */

function loop(len) {
  fn(500, len+"th", function(err, args, name) {
    console.log("callback of " + name + " function is called in " + args + "ms");
    if(len) {
      loop(len-1);
    }
  });
}

loop(5);
