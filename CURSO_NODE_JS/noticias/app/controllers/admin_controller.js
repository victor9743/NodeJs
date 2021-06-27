module.exports.formulario_add_noticia = (application,req,res) =>{
    res.render("admin/form_add_noticia",{validacao: {}, noticia: {}})
}

module.exports.noticias_salvar = (application, req, res )=>{

    var noticia = req.body;

    console.log(noticia);

    //validar campo da noticia

    req.assert('titulo','Título é obrigatório').notEmpty();
    req.assert('resumo','Resumo é obrigatório').notEmpty();
    req.assert('autor','Autor é obrigatório').notEmpty();
    req.assert('data_noticia','Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia','Noticia é obrigatória').notEmpty().len(10,100);

    // verifica todos os erros existentes

    
    var erros = req.validationErrors();

    console.log(erros);

    if(erros){
        res.render("admin/form_add_noticia",{validacao: erros, noticia: noticia})
        return;


    }


    //salvar noticia

        var connection = application.config.banco();

        var noticiaModel =application.app.models.noticiasModel;

        // busca no banco

        noticiaModel.salvarNoticia(connection, noticia,(error,result)=>{

            res.redirect("/noticias")
        })
}