var servidor = require('express');
var consign = require('consign');
var parser = require('body-parser');
var exvalidator = require('express-validator');
var exsession = require('express-session');


var app = servidor();
app.set('view engine','ejs');
app.set('views','./app/views');

app.use(servidor.static('./app/public'))
app.use(parser.urlencoded({extended: true}));
app.use(exvalidator());
app.use(exsession({
    secret:'sdfamsdçlafafnn',
    resave: false,
    saveUninitialized: false
}));

consign().include('app/routes')
.then('config/conexaoDB.js')
.then('app/models')
.then('app/controllers')
.into(app);

module.exports= app;