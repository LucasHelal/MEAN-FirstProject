var express = require('express')
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.use(express.static('./public')) //configura o middleware para acessar os end dos arq. externos
app.use(bodyParser.json());

consign({ cwd: 'app'})
  .include('models')
  .then('api')
  .then('routes')
  .into(app);
//require('../app/routes/foto')(app);
//require('../app/routes/grupos')(app);

module.exports = app;
