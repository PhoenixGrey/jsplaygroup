function fn(args, name, cb) {
  console.log("Running " + name + " function and it will callback in " + args + "ms");
  setTimeout(function() {cb(null, args, name)}, args);
} 

var len = 5;
for(var i=0; i<len; i++) {
  fn(500, i+"th", function(err, args, name) {
    console.log("callback of " + name + " function is called in " + args + "ms");
  });
}

/*
 * Problem 2 
 *  Callback of Second function will finish earlier than the First function
 *  And the requirement is to run Second function when callback of First one is finished 
 */



/* Solution 2 */

/*
fn(4000, "First", function(err1, args1, name1) {
  console.log("callback of " + name1 + " function is called in " + args1 + "ms");
  fn(500, "Second", function(err2, args2, name2) {
    console.log("callback of " + name2 + " function is called in " + args2 + "ms");
  });
});

*/

