var express = require('express');
var consign = require('consign');
var bodyPARSER = require('body-parser');
var expressvalidator = require('express-validator');

var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');

app.use(bodyPARSER.urlencoded({extended:true}));
app.use(expressvalidator());

consign().include('app/routes')
.then('config/banco.js')
.then('app/models')
.then('app/controllers')
.into(app)


module.exports = app
