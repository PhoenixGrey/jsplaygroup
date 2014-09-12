var graph = {
  "a": ["b", "c"],
  "b": ["d", "e", "f"],
  "c": ["g"],
  "d": ["i"],
  "g": ["h"]
}

var children = [];

children.__proto__.merge = function(l) {
  console.log(l.length);
  for(var i=0; i<l.length; i++) {
    children.push(l[i]);
  }
}
 
graph.find = function(key, cb) {
  if(!graph.hasOwnProperty(key)) return cb(null, []);
  else return cb(null, graph[key]);
}

/*
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
*/
function findChildren(key, cb) {
  console.log("visit " + key); 
  graph.find(key, function(err, kids) {
    var len = kids.length;
    if(len) {
      console.log("with length : " + len);
      loop(0, kids, function(error, all) {
        console.log(all);
        return cb(all);
      });
    }
    else {
      console.log("pushing elements in ....")
      children.push(key);
      return cb(children);
    }
  });   
}


function loop(index, childList, callback) {
  //console.log("in loop of " + childList[index]);
  findChildren(childList[index], function(list) {
    console.log(list);
    //console.log(childList[index]+ "" + list);
    children.merge(list); 
    if(index<childList.length-1) loop(index+1, childList, callback); 
    else {
      console.log(children);
      return callback(null, children);
    } 
  });
}

findChildren("a", function(c) {
  console.log(c);
})

// children.merge(['a', 'b', 'c']);
// console.log(children);
/*
graph.find("a", function(err, data) {
  console.log(data);
});
*/
