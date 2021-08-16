var servidor = require("express");
var consign = require ("consign");
var bodyParser = require("body-parser");
var exvalidator = require("express-validator");

var app = servidor();

app.set("view engine","ejs");
app.set("views",'./app/views');

app.use(servidor.static("./app/public"));

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use(exvalidator());

consign()
.include("app/routes")
.then("app/models")
.then("app/controllers")
.into(app)

module.exports =app;