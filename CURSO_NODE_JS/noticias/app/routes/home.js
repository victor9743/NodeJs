
/* Index */
module.exports = (application)=>{

    application.get("/", (req,res)=>{
        application.app.controllers.home_controller.home(application,req,res);
    })
   
}