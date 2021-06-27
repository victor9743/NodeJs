var servidor = require('express'),
    bodyParser = require('body-parser'),
    mongodb = require("mongodb"),
    
    objectId = require('mongodb').ObjectId;
    var mult = require('connect-multiparty');
    var app = servidor();
    fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(mult());

var porta = 3000;

app.listen(porta);

var db = new mongodb.Db(
    'instagram',
    new mongodb.Server('localhost',27017,{}),
    {}

);

console.log("Servidor Rodando na porta: localhost:"+ porta );

app.get("/",(req, res)=>{
    res.send({msg: 'Olá Mundo'});
})

// post ( create )
app.post("/api", (req, res)=>{

    res.setHeader("Access-Control-Allow-Origin","*");
    var dados = req.body;

    res.send(dados);

    console.log(req.files);

    /*
    db.open( function(err, mongoclient){

        mongoclient.collection('postagens',(err, callback)=>{

            callback.insert(dados,(err, result)=>{

                if(err){
                    
                    res.json(err);

                }else{
                    
                    res.json(result);

                }
                mongoclient.close();


            })

        })

    })*/

})

// get(ready)

app.get("/api", (req, res)=>{


    db.open( function(err, mongoclient){

        mongoclient.collection('postagens',(err, callback)=>{

            callback.find().toArray(function(err,result){

                if(err){

                    res.json(err);
                }else{
                    res.json(result);
                }

                mongoclient.close();

            })

        })
    })

})

// get by ID(ready)

app.get("/api/:id", (req, res)=>{


    db.open( function(err, mongoclient){

        mongoclient.collection('postagens',(err, callback)=>{

            callback.find(objectId(req.params.id)).toArray(function(err,result){

                if(err){

                    res.json(err);
                }else{
                    res.status(200).json(result);
                }

                mongoclient.close();

            })

        })
    })

})


// Put by ID(update)

app.put("/api/:id", (req, res)=>{


    db.open( function(err, mongoclient){

        mongoclient.collection('postagens',(err, collection)=>{

            collection.update(
                {
                    _id : objectId(req.params.id)
                },
                { 
                    $set : {titulo: req.body.titulo }
                },
                {},
                function(erro, result){

                            
                        if(erro){

                            res.json(erro);
                        }else{
                            res.json(result);
                        }

                mongoclient.close();

                }

            );

            

        })
    })

})


// Delete by ID(remover)

app.delete("/api/:id", (req, res)=>{


    db.open( function(err, mongoclient){

        mongoclient.collection('postagens',(err, collection)=>{

            collection.remove({_id : objectId(req.params.id)},function(err, result){

                if(err){
                    res.json(err);
                }else{
                    res.json(result);
                }

                mongoclient.close();
            });

            

        })
    })

})

