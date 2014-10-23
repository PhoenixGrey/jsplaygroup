/*
  fs.readFile(filename, read_callback)
  encrypt(data, encrypt_callback)
  fs.writeFile(filename, content, write_callback)
*/


var fs = require('fs');
var crypto = require('crypto');

var Q = require('q');

var encrypt_simple = function(data) {
    var shasum = crypto.createHash('sha1');
    shasum.update(data);
    return shasum.digest('hex'); 
};

function promise_run() {
  Q.nfcall(fs.readFile, './news.log', 'utf-8')
    .then(encrypt_simple)
    .then(function(data) { 
      console.log(data);
      return data;
    }) 
    .then(function(encrypted_data) {
      return Q.nfcall(fs.writeFile, './promise_encrypted_news.log', encrypted_data);
    })
}

promise_run();
