module.exports.noticias = (application,req,res)=>{
    
    var connection = application.config.banco();
    var getnoticias = application.app.models.noticiasModel;

    // busca no banco


    getnoticias.getNoticias(connection,(error,result)=>{

        res.render("noticias/noticias",{noticias: result})
    })
   
    

}

module.exports.noticia = (application,req,res)=>{

    var connection = application.config.banco();

    var getnoticias = application.app.models.noticiasModel;

    // recuperar parametros 
    var id_noticia = req.query;

    getnoticias.getNoticia(id_noticia, connection,(error,result)=>{

        res.render("noticias/noticia",{noticia: result})
    })


}