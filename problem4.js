var first = 1;
var second = 1;
function fib(step, cb) {
  console.log(first + "+" + second + "=" + eval(first+second));
  tmp = second;
  second = first + second;
  first = tmp;
  if(!step) return cb(second);
  fib(step-1, cb);  
}


fib(4, function(data) {
  console.log(data);
});
