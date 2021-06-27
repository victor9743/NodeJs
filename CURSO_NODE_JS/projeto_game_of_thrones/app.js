var serv = require('./config/servidor');

serv.listen('3000',()=>{

    console.log("Servidor Express Rodando em: 'localhost: 3000'");
})