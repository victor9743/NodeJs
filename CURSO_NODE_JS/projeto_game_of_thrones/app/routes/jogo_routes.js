module.exports = (application)=>{

    application.get('/jogo',(req,res)=>{
        
        application.app.controllers.jogo_controller.jogo(application, req, res);

    })
    application.get('/sair',(req, res)=>{
        application.app.controllers.jogo_controller.sair(application, req, res);

    })
    

    application.get("/pergaminhos",(req,res)=>{

        application.app.controllers.jogo_controller.pergaminho(application,req,res);

    })

    application.get("/suditos",(req, res)=>{

        application.app.controllers.jogo_controller.aldeao(application, req, res);

    })

    
    application.post("/ordenar_acao_sudito",(req, res)=>{

        application.app.controllers.jogo_controller.sudito(application, req, res);

    })

    application.get("/remover_acao",(req, res)=>{

        application.app.controllers.jogo_controller.remover_acao(application, req, res);

    })
    
    
}