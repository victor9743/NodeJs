// importar configurações do servidor
var app= require('./config/server.js');

var server = app.listen(80,()=>{
    console.log("servidor ON");
})

var io =require('socket.io').listen(server);

// criando variável global

app.set("io",io);

//  criar a conexão websocket


io.on('connection',(socket)=>{
    console.log("usuário conectou");

    socket.on('disconnect',()=>{
        console.log("Usuário desconectado");
    })

    socket.on('msgParaServidor', (data)=>{
        socket.emit('msgparaCliente', {apelido: data.apelido, mensagem: data.mensagem });

        // envio de mensagem para os outros usuários
        socket.broadcast.emit('msgparaCliente', {apelido: data.apelido, mensagem: data.mensagem })



        // participantes
        if(parseInt(data.apelido_atualizado_cliente) == 0){
            socket.emit('participantesparaCliente', {apelido: data.apelido });


            socket.broadcast.emit('participantesparaCliente', {apelido: data.apelido })
        }
    })
});

