
/*
 *  We would like to have iterative, inductive, and recursive calling with callback 
 */



/*
 *  fibonacci with callback in recursion
 */

function fib_recursive(step, cb) {
  console.log("call fib(" + step + ")");
  if(step===1 || step===0) return cb(1);
  fib_recursive(step-2, function(a) {
    fib_recursive(step-1, function(b) {
      return cb(a+b);
    });
  });
}


/*
 *   fibonacci with callback in induction
 */
function fib_inductive(step, first, second, cb) {
  console.log(first + "+" + second + "=" + eval(first+second));
  tmp = second;
  second = first + second;
  first = tmp;
  if(!step) return cb(second);
  fib_inductive(step-1, first, second, cb);  
}

/*
 *   fibonacci with callback in iteration
 */
function fib(step, callback) {
  var first = 1;
  var second = 1;
  for(i=0; i<step; i++) {
    console.log(first + "+" + second + "=" + eval(first+second));
    tmp = second;
    second = first + second;
    first = tmp;
  } 
  return callback(second);
}

fib_inductive(5, 1, 1, function(data) {
  console.log(data);
});

fib(4, function(data) {
  console.log(data);
});



fib_recursive(8, function(data) {
  console.log(data);
})
