var graph = {
  "a": ["b", "c"],
  "b": ["d", "e", "f"],
  "c": ["g"],
  "d": ["i"],
  "g": ["h"]
}

var queue = [];
var children = [];

queue.merge = function(l) {
  for(var i=0; i<l.length; i++) {
    queue.push(l[i]);
  }
}
 
graph.find = function(key, cb) {
  if(!graph.hasOwnProperty(key)) return cb(null, []);
  else return cb(null, graph[key]);
}


function findSearch(root, callback) {
  queue.push(root);
  findAll(root, function(value) {
    callback(value);
  });
}

function findAll(root, callback) {
  children.push(root); 
  graph.find(queue[0], function(err, data) {
    queue.splice(0,1)
    if(data.length!==0) queue.merge(data); 
    if(queue.length===0) return callback(children);
    else findAll(queue[0], callback);
  });
}

findSearch("e", function(c) {
  console.log(c);
});


/*
graph.find("a", function(err, data) {
  console.log(data);
});
*/
