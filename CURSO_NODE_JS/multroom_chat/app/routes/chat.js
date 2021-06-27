module.exports = (application)=>{

    application.post("/chat",(req,res)=>{

        application.app.controllers.chat_controller.chat(application, req, res);

    });

    application.get("/chat",(req,res)=>{

        application.app.controllers.chat_controller.chat(application, req, res);

    })

}