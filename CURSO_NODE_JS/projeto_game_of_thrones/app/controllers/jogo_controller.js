const { render } = require("ejs");

module.exports.jogo = (application, req, res)=>{

    if(req.session.autorizado !== true){
        res.render("home/index_view", {autenticacao: {}})
        
        return;
    }

    var msg = '';

    if(req.query.msg != ''){
        
       msg = req.query.msg;
    }

   

    var usuario = req.session.usuario;
    var casa = req.session.casa;
    
    var conexao = application.config.conexaoDB;
    var jogodao = new application.app.models.jogoDAO(conexao);

    jogodao.iniciaJogo(res, usuario, casa, msg);

    
    
    
}

module.exports.sair = (application, req, res)=>{

    // remover/ destroir uma sessão
    req.session.destroy((err)=>{
        res.render("home/index_view",{autenticacao:{}});
    })
}

module.exports.pergaminho = (app, req, res)=>{
    
    if(req.session.autorizado !== true){
        res.render("home/index_view", {autenticacao: {}})
        
        return;
    }
    // recuperar  as ações inseridas no banco de dados
    var conexao = app.config.conexaoDB;
    var jogodao = new app.app.models.jogoDAO(conexao);

    var usuario = req.session.usuario;

    jogodao.getacoes(usuario,res);
    
}

module.exports.aldeao = (application, req, res)=>{

    
    if(req.session.autorizado !== true){
        res.render("home/index_view", {autenticacao: {}})
        
        return;
    }

    res.render("aldeoes/aldeoes_view")

}


module.exports.sudito = (application, req, res)=>{
    
    if(req.session.autorizado !== true){
        res.render("home/index_view", {autenticacao: {}})
        
        return;
    }

    var dados = req.body;

    req.assert("acao","Ação deve ser informada").notEmpty();

    req.assert("quantidade","Ação deve ser informada").notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.redirect("jogo?msg=A");
        return;
    }

    
    var conexao = application.config.conexaoDB;
    var jogodao = new application.app.models.jogoDAO(conexao);


    dados.usuario = req.session.usuario;
 
    jogodao.acao(dados);

    res.redirect("jogo?msg=B");
}

module.exports.remover_acao = (application, req, res)=>{


    var conexao = application.config.conexaoDB;
    var jogodao = new application.app.models.jogoDAO(conexao);

    var id = req.query.id;

    jogodao.revogar_acao(id, res);

}