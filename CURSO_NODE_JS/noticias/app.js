var app = require("./config/servidor")


//startar o servidor
app.listen(3000, ()=>{
    console.log("Servidor rodando com express na porta = 'localhost:3000'")
})