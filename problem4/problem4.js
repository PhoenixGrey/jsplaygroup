/*
 *    Fibonacci in iteration, induction, and recursion 
 *
 */
function fib_recursive(step) {
  console.log("call fib(" + step + ")");
  if(step===1 || step===0) return 1;
  else return fib_recursive(step-2) + fib_recursive(step-1);
}


function fib_inductive(step, first, second) {
  console.log(first + "+" + second + "=" + eval(first+second));
  tmp = second;
  second = first + second;
  first = tmp;
  if(step===0) return second;
  fib_inductive(step-1, first, second)
}

function fib(step) {
  var first = 1;
  var second = 1;
  for(i=0; i<step; i++) {
    console.log(first + "+" + second + "=" + eval(first+second));
    tmp = second;
    second = first + second;
    first = tmp;
  } 
  return second;
}

fib_recursive(5);

fib_inductive(5, 1, 1);

fib(5);


