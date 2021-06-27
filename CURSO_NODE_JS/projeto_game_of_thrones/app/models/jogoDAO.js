

function jogoDAO(connection){
    
    var con = connection();


    this.gerarParametros = (usuario)=>{

        con.open(function(err, mongoclient){
            mongoclient.collection("jogo", function(erro, dados){
                dados.insert({

                    usuario: usuario,
                    moeda: 15,
                    suditos: 10,
                    temor: Math.floor(Math.random()*1000),
                    sabedoria: Math.floor(Math.random()*1000),
                    comercio: Math.floor(Math.random()*1000),
                    magia: Math.floor(Math.random()*1000)

                   
                });

                mongoclient.close();

            })
        })
    }

    this.iniciaJogo = (res, usuario,casa, msg)=>{
        con.open(function(err, mongoclient){
            mongoclient.collection("jogo", function(erro, dados){
                dados.find({usuario: usuario}).toArray((erro,resultado)=>{
                    
                    res.render("jogo/jogo_view",{img_casa: casa, jogo: resultado[0], msg: msg})

                    mongoclient.close();

                });

               
    
            })
        })
    }

    this.acao = (acao)=>{
        con.open(function(err, mongoclient){
            mongoclient.collection("acao", function(erro, dados){
                
                var data = new Date();

                var tempo = null;

                switch (parseInt(acao.acao)) {
                    case 1:
                        // 1 hora

                        tempo = 1 * 60 * 60000;
                        
                        break;
                    case 2:

                        // 2 hora

                        tempo = 2 * 60 * 60000;
                        break;
                    
                    case 3:

                        // 3 hora

                        tempo = 5 * 60 * 60000;
                        break;
                    
                    case 4:
                        // 5 hora

                        tempo = 5 * 60 * 60000;
                        break;
                }

                acao.acao_termina_em = data.getTime() + tempo;
                
                dados.insert(acao);

               
         

            })

            mongoclient.collection("jogo", function(err, collection){

                var moedas = null;

                switch(parseInt(acao.acao)){

                    case 1:
                        // 1 hora

                        moedas = -2 * acao.quantidade;
                        
                        break;
                    case 2:

                        // 2 hora

                        moedas = -3 * acao.quantidade;
                        break;
                    
                    case 3:

                        // 3 hora

                        moedas = -1 * acao.quantidade;
                        break;
                    
                    case 4:
                        // 5 hora

                        moedas = -1 * acao.quantidade;
                        break;

                }

                collection.update(
                    { usuario: acao.usuario},
                    { $inc: {moeda: moedas}}

                )

                mongoclient.close();

            })
        })

    }
    this.getacoes= (usuario,res)=>{
        con.open(function(err, mongoclient){
            mongoclient.collection("acao", function(erro, dados){
                var data = new Date();
                var momento_atual = data.getTime();
                dados.find({usuario: usuario,acao_termina_em: { $gt: momento_atual }}).toArray((erro,resultado)=>{
                
                   

                    res.render("pergaminhos/pergaminhos_view",{acoes: resultado});
                    
                   

                    mongoclient.close();

                });               
    
            })
        })
    }

    this.revogar_acao = (id, res)=>{

        //var ObjectID = require("mongodb").ObjectID;

       
        con.open( function(err, mongoclient){

            mongoclient.collection("acao", function(erro, collection){

                collection.remove(
                    { _id : id},
                    function(err, result){

                        res.redirect("jogo?msg=D");

                        mongoclient.close();
                    }
                )
            
            
            })
        })

    }

}



module.exports = ()=>{
    return jogoDAO;
}