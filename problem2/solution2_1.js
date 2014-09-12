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



/* Solution 2 */

fn(500, "1th", function(err1, args1, name1) {
  console.log("callback of " + name1 + " function is called in " + args1 + "ms");
  fn(500, "2th", function(err2, args2, name2) {
    console.log("callback of " + name2 + " function is called in " + args2 + "ms");
    fn(500, "3th", function(err3, args3, name3) {
      console.log("callback of " + name3 + " function is called in " + args3 + "ms");
      fn(500, "4th", function(err4, args4, name4) {
        console.log("callback of " + name2 + " function is called in " + args4 + "ms");
        fn(500, "5th", function(err5, args5, name5) {
          console.log("callback of " + name5 + " function is called in " + args5 + "ms");
        });
      });
    });
  });
});

