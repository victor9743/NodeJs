module.exports = (application)=>{

    application.get('/cadastro',(req,res)=>{
        application.app.controllers.cadastro_controller.cadastro(application, req, res);
    })

    application.post("/salvar", (req, res)=>{

        application.app.controllers.cadastro_controller.salvarcadastro(application,req, res);

    })
}