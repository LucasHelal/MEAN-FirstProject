
module.exports = function(app){

  var api = app.api.foto;

  app.get('/v1/foto', api.lista);

  app.get('/v1/fotos/:id', api.buscaPorId);
};
