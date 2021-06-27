const pasta = require("../../../Módulos/hello_wolrd2");


console.log(pasta.nome);

const http = require("http")
http.createServer((req,res) =>{
    res.write("Hello Wolrd")
    res.end()
}).listen(8080)