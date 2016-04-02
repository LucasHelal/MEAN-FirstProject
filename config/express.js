var express = require('express')
var app = express();
var consign = require('consign');

app.use(express.static('./public')) //configura o middleware para acessar os end dos arq. externos

consign({ cwd: 'app'})
    .include('api')
    .then('routes')
    .into(app);
//require('../app/routes/foto')(app);
//require('../app/routes/grupos')(app);

module.exports = app;
