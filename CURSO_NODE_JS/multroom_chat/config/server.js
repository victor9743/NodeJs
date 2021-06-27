// importar o servidor express
var serv = require("express");

// importar consign
var consign = require("consign");

// importar body-parser
var bodyParser = require("body-parser");

// importar express-validator
var validator = require("express-validator");

// iniciar o objeto express

app = serv();

// configurar o ejs
app.set('view engine','ejs');
app.set('views', './app/views');


// express static
app.use(serv.static('./app/public'));

// configurar body-parser recupera dados da url via json
app.use(bodyParser.urlencoded({extended: true}))

// configurar express validator
app.use(validator());

// configurar consign
// efetua o autoload das rotas, dos models e dos controllers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    
    .into(app)

// exportar o objeto app
module.exports = app;




