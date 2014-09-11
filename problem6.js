function fn(args, name, cb) {
  console.log("Running " + name + " function and it will callback in " + args + "ms");
  setTimeout(function() {cb(null, args, name)}, args);
} 

var global_variable = "hello world";

fn(300, "First", function(err, args, name) {
  console.log("callback of " + name + " function is called in " + args + "ms");
  global_varibale[2] = "s"; 
});

fn(500, "Second", function(err, args, name) {
  console.log("callback of " + name + " function is called in " + args + "ms");
  console.log(global_variable);
});

