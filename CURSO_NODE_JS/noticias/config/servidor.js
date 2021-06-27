var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser')
var expressValidator = require('express-validator');


var app= express();
app.set('view engine','ejs');
app.set('views','./app/views');


app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator());

// inclui a pasta public
app.use(express.static("./app/public"))

// irá incluir todas as rotas em app.js
consign().include('app/routes')
.then('config/banco.js')
.then('app/models')
.then('app/controllers')
.into(app)

module.exports = app