module.exports = (application)=>{

    application.get('/',(req,res)=>{

        application.app.controllers.home_controller.home(application,req,res);

    })
    application.post('/autenticar',(req, res)=>{
        application.app.controllers.home_controller.autenticar(application,req,res);
    })

}