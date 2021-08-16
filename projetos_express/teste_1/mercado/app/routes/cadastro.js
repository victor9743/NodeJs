module.exports=(application)=>{

    application.get("/cadastro",(req,res)=>{
        application.app.controllers.cadastro_controller.cadastro(application,req,res);
    })

    // post

    application.post("/produtos/salvar",(req,res)=>{
        application.app.controllers.cadastro_controller.salvar_noticia(application,req,res);
    })
}