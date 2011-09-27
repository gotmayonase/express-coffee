(function() {
  var app, express;
  express = require('express');
  app = express.createServer();
  app.register('.coffee', require('coffeekup'));
  app.set('view engine', 'jade');
  app.use(express.compiler({
    src: __dirname + '/../public',
    enable: ['sass']
  }));
  app.use(express.static(__dirname + '/../public'));
  app.get('/', function(request, response) {
    return response.render('index');
  });
  app.listen(process.env.PORT || 8000);
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
}).call(this);
