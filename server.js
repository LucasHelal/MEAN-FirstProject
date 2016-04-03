var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/MEAN-FirstProject');

http.createServer(app).listen(3000, function(){
  console.log('Server Start')
});
