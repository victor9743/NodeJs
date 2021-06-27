module.exports.home = (application,req,res)=>{
    
    var connection = application.config.banco();
    var noticiasModel = application.app.models.noticiasModel;

      // recuperar as cinco ultimas noticias


    noticiasModel.get5UltimasNoticias(connection,(error,result)=>{

        console.log(result);
        res.render("home/index", {noticia: result})

    })

  
    
  
}