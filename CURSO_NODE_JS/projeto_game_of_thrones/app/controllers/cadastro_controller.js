module.exports.cadastro = (application, req, res)=>{

    if(req.session.autorizado){
    res.render('cadastro/cadastro_view',{validacao: {}, dados:{}});
    } else{
        res.render('home/index_view',{autenticacao: {}})
    }

}

module.exports.salvarcadastro = (application, req, res)=>{

    var cadastro = req.body;


    req.assert("nome"," O Campo Nome não pode está vazio").notEmpty();
    req.assert("usuario", "O Campo Usuário não pode está vazio").notEmpty();
    req.assert("usuario", "O Campo Usuário deve ter entre 5 a 15 caracteres").len(5,15);
    req.assert("senha", "A Senha é obrigatória").notEmpty();
    req.assert("casa"," A Casa é obrigatória").notEmpty();

    var erros = req.validationErrors();

    console.log(erros);

    if(erros){

        res.render("cadastro/cadastro_view",{ validacao: erros, dados: cadastro})

        return;
    }

    // importando conexão do mongodb
    var conexao = application.config.conexaoDB;
    var usuariosdao = new application.app.models.usuariosDAO(conexao);
    var jogodao = new application.app.models.jogoDAO(conexao);
    

    usuariosdao.inserirUsuario(cadastro);
    jogodao.gerarParametros(cadastro.usuario);

    res.redirect("/cadastro");

    
}