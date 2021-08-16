var servidor = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var mult = require("connect-multiparty");

var api = servidor();


api.use(bodyParser.urlencoded({extended: true}))
api.use(bodyParser.json());
api.use(mult());

/*api.use((req,res,next)=>{

        // habilitar requisições
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        
        //res.setHeader("Access-Control-Allow-Credentials", true);
    
        next();

});*/


var consql = function(){

    return mysql.createConnection({

        host:'localhost',
        user:'root',
        password:"1234",
        database:"orcamento"
    
    })
    

}


api.listen(3000,()=>{
    console.log("API: LOCALHOST:3000 ")
});


api.get("/",(req,res)=>{
    res.send("hello wolrd lado api");
})

//  inserção
api.post("/envio",(req,res)=>{
    
    var dados = req.body;

    var conexao = consql();

    res.setHeader("Access-Control-Allow-Origin","*");
   

    conexao.query("insert into financas set ? ",dados);

  
})

// recuperação
api.get("/valores",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    var conexao = consql();

    conexao.query("select * from financas",(err, result)=>{

        if(err){
            res.json(err);
        }else{
            res.json(result);
        }

        conexao.destroy();
    }); 

})

// atualização
api.put("/update/:id",(req, res)=>{

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    console.log(req.params.id);


     var conexao = consql();

    conexao.query("select * from financas where id_financa = '"+req.params.id+"'", (err, result)=>{

        if(result[0] != undefined){
           
            conexao.query("update financas set descricao_financa = ?, data_financa = ?, valor_financa=? where id_financa= ?",[req.body.descricao_financa, req.body.data_financa, req.body.valor_financa, req.params.id],(err, result)=>{

                if(err){
                    res.json(err)
                }else{
                    res.json(result);
                }
                conexao.destroy();
            })
        }else{

            res.json(err);
        }

     
    })

})

// remoção

api.delete("/delete/:id",(req, res)=>{

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    

    var conexao = consql();

    conexao.query("delete from financas where id_financa = '"+ req.params.id+"'", (err, result)=>{

        if(err){
            res.json(err);
        }else{
            res.json(result)
        }

        conexao.destroy();
    })
   

})

