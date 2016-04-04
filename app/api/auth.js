module.exports = function(app){
  var mongoose = require('mongoose');
  var jwt = require('jsonwebtoken')

  var api = {};
  var model = mongoose.model('Usuario');

  api.autentica = function(req, res) {
    model
    .findOne({login: req.body.login, senha: req.body.senha})
    .then(function(usuario) {
      if(!usuario) {
        console.log('Login e senha inválidos!');
        res.sendStatus(401);
      } else {
        var token = jwt.sing(usuario.login, app.get('secret'), {
          expiresIn: 84600
        });

        console.log('Token criado e sendo enviado no header de resposta');
        res.set('x-acess-token', token);
        res.end();
      }
    }, function(error) {
      console.log('Login e senha inválidos!');
      res.sendStatus(401);
    });
  };

  api.verificaToken = function(req, res) {
    var token = req.header('x-acess-token');
    if(token) {

      console.log('Verificando Token...');
      jwt.verify(token, app.get('secret'), function(err, decoded) {
        if(err) {
          console.log('Token rejeitado.');
          res.sendStatus(401);
        }
        req.usuario = decoded;
        next();
      });
    } else {
      console.log('Token não foi enviado.');
      res.sendStatus(401);
    }
  };

  return api;
};
