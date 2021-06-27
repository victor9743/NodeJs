module.exports.chat = (application, req, res)=>{

    var dadosForm = req.body;

    console.log(dadosForm);

    req.assert("apelido","Nome é obrigatório").notEmpty();
    req.assert("apelido","Nome é Deve ter entre 3 a 15 caracteres").len(3,15);

    var erros = req.validationErrors();

    if(erros){
        res.render("home/index", {validacao: erros});

        return;
    }

    application.get("io").emit('msgparaCliente', {apelido: dadosForm.apelido,
                                                  mensagem: ' acabou de entrar no chat '});

    res.render("chat/chat",{dados: dadosForm});

}
