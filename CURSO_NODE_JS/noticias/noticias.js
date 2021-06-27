var http = require('http')

var server = http.createServer((req,res)=>{

    var URLsolicity = req.url;

    if(URLsolicity == "/tecnologia"){

        res.end("<html><body>Noticías de Tecnologia</body></html>")
    }
    else if(URLsolicity=="/moda"){
        res.end("<html><body>Noticías de Moda</body></html>")
    }
    else if(URLsolicity == "/beleza"){
        res.end("<html><body>Noticías de Beleza</body></html>")
    }
    else {
        res.end("<html><body>Portal de Noticias</body></html>")
    }

 

})

server.listen(3000);

/* Exemplo
    var server1 = http.createServer((req,res)=>{

        const x =3
        const y=132
        const result = (x+y).toString()

        res.end(result)

    })

    server1.listen(4000);
*/