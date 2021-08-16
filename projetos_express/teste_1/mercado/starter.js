const serv = require("./config/servidor")


serv.listen(3000,()=>{
    console.log("Servidor do mercado rodando com express na porta: 'localhost:3000' ")
})