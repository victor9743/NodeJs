var servidor = require("./config/server")

servidor.listen(4000, ()=>{
    console.log("servidor app rodando na porta 4000");
})