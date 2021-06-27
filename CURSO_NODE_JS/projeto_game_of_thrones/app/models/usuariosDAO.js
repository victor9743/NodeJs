// importar o módulo do crypto
var cryptoSenha = require("crypto");

function usuariosDAO(connection){
    
    var con = connection();
    this.inserirUsuario = (usuario)=>{

        con.open(function(err, mongoclient){
            mongoclient.collection("usuarios", function(erro, dados){

                var passcrypto = cryptoSenha.createHash("md5").update(usuario.senha).digest("hex");
                usuario.senha = passcrypto;

                dados.insert(usuario);

                mongoclient.close();
    
            })
        })
    
    }
    this.autenticar =(usuario, req, res)=>{

        con.open(function(err, mongoclient){
            mongoclient.collection("usuarios", function(erro, dados){

                var passcrypto = cryptoSenha.createHash("md5").update(usuario.senha).digest("hex");
                usuario.senha = passcrypto;
                
                dados.find({usuario: {$eq: usuario.usuario}, senha: {$eq: usuario.senha}}).toArray((erro,resultado)=>{
                    
                    if(resultado[0] != undefined){
                        req.session.autorizado =true;

                        req.session.usuario = resultado[0].usuario;
                        req.session.casa = resultado[0].casa;
                    }

                    if(req.session.autorizado){
                        res.redirect('jogo');
                    }else{
                        res.render("home/index_view", {autenticacao: {}});
                    }

                });

                mongoclient.close();
    
            })
        })

        

    }
  

}



module.exports = ()=>{
    return usuariosDAO;
}