module.exports = (application)=>{

    application.get("/produtos",(req,res)=>{
        application.app.controllers.produto_controller.produtos(application,req,res);
    })
  

}