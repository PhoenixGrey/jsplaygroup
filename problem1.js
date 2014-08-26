function fn(args, name, cb) {
  console.log("Running " + name + " function and it will callback in " + args + "ms");
  setTimeout(function() {cb(null, args, name)}, args);
} 

fn(4000, "First", function(err, args, name) {
  console.log("callback of " + name + " function is called in " + args + "ms");
});

fn(500, "Second", function(err, args, name) {
  console.log("callback of " + name + " function is called in " + args + "ms");
});

