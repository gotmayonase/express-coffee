express = require('express')
app = express.createServer()

# Setup Template Engine
app.register '.coffee', require('coffeekup')
app.set 'view engine', 'jade'

# Setup Static Files
app.use express.compiler({ src: __dirname + '/../public', enable: ['sass'] })
app.use express.static(__dirname + '/../public')

# App Routes
app.get '/', (request, response) ->
  response.render 'index'

# Listen
app.listen process.env.PORT || 8000
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);