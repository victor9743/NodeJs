var servidor = require("./config/server");

servidor.listen(3000, ( req, res)=>{

    console.log("Servidor Rodando na porta localhost: 3000");

})