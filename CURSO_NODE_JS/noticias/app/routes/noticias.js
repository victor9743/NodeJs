// Noticias

module.exports =(application)=>{

    application.get("/noticias",(req,res)=>{

        application.app.controllers.noticias_controller.noticias(application,req,res);

    })
    


    
    application.get("/noticia", (req,res)=>{

        application.app.controllers.noticias_controller.noticia(application,req,res);
    

    })
    
}