module.exports.cadastro = (app,req,res)=>{

    res.render("cadastro/cadastro",{produto:{}});
}

module.exports.salvar_noticia = (application,req,res)=>{

    var produto = req.body;

    // salvar noticia

    var connection = application.config.banco();

    var produtoModel = application.app.models.mercadoDAO;

    produtoModel.salvarNoticia(connection, produto,(error,result)=>{
        res.redirect("/produtos");
    })

}