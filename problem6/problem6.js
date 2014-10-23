/*
  fs.readFile(filename, read_callback)
  encrypt(data, encrypt_callback)
  fs.writeFile(filename, content, write_callback)
*/


var fs = require('fs');
var crypto = require('crypto');


var encrypt = function(data, callback) {
    var shasum = crypto.createHash('sha1');
    shasum.update(data);
    var encrypted_data = shasum.digest('hex'); 
    return callback(null, encrypted_data);
};


function run() {
  fs.readFile('./news.log', 'utf8', function(read_err, read_data) {
    if(read_err) return read_err;
    encrypt(read_data, function(encrypt_err, encrypted_data){
      if(encrypt_err) return encrypt_err;
      console.log(encrypted_data);
      fs.writeFile('./encrypted_news.log', encrypted_data, function(write_err) {
          if(write_err) return write_err;
      });
    });
  });
}


run();

