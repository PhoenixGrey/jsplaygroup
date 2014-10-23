/*
  Depth-first search
*/
var graph = {
  "a": ["b", "c"],
  "b": ["d", "e", "f"],
  "c": ["g"],
  "d": ["i"],
  "g": ["h"]
}

graph.find = function(key, cb) {
  if(!graph.hasOwnProperty(key)) return cb(null, []);
  else return cb(null, graph[key]);
}

function findChildren(key, cb) {
  console.log("visit " + key); 
  var chis = [];
  graph.find(key, function(err, kids) {
    var len = kids.length;
    if(len) {
      var count = 0;
      console.log("with length : " + len);
      for(var i=0; i<len; i++) {
        findChildren(kids[i], function(chs) {
          for(var j=0; j<chs.length; j++) {
            chis.push(chs[j]);
          }
          count++;
          if(count===len) {
            chis.push(key);
            return cb(chis);
          }
        });
      }
    }
    else {
      return cb(key);
    }
  });   
}


findChildren("b", function(c) {
  console.log(c);
});


