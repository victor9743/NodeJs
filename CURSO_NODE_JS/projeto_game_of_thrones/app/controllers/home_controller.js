module.exports.home = (application, req, res)=>{

    res.render('home/index_view',{autenticacao: {}, dados: {}});
}

module.exports.autenticar = (application, req, res)=>{


    var dadosLogin = req.body;

    req.assert("usuario", "Usuário não pode estar vazio").notEmpty();
    req.assert("senha", "Senha não pode estar vazia").notEmpty();


    var erros = req.validationErrors();

    if(erros){

        console.log(erros);
        res.render('home/index_view',{autenticacao: erros, dados: dadosLogin});
        return;
    }

    // importando conexão do mongodb
    var conexao = application.config.conexaoDB;
    var usuariosdao = new application.app.models.usuariosDAO(conexao);

    usuariosdao.autenticar(dadosLogin, req, res)

    //res.render('jogo/jogo_view');

}