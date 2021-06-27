// Admin
module.exports = (application)=>{
    application.get("/admin", (req,res)=>{
        // Chamando o controller admin_controller
        application.app.controllers.admin_controller.formulario_add_noticia(application, req,res);
        
    })

    // post
    application.post("/noticias/salvar", (req,res)=>{

        application.app.controllers.admin_controller.noticias_salvar(application, req,res);
       
    
    })
    
}
