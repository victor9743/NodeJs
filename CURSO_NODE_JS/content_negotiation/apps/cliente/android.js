var http = require("http");

var bufferLoading = [];

var opcoes = {
    hostname: 'localhost',
    port: 80,
    path:'/teste',
    method:'post',
    headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
    }
}
// content-type


/*
http.get(opcoes,function(res){

    // processo de carregamento

    res.on("data", (pedaco)=>{
        bufferLoading.push(pedaco);
    })

    // fim do processo de carregamento

    res.on("end",()=>{
        var corpoBuffer = Buffer.concat(bufferLoading).toString();

        console.log(corpoBuffer);
    })

})
*/
/*ar html = 'nome=josé'; // x-www-form-urlencoded

var json ={nome: 'José'}
*/
var request = http.request(opcoes,(res)=>{

      // processo de carregamento

      res.on("data", (pedaco)=>{
        bufferLoading.push(pedaco);
    })

    // fim do processo de carregamento

    res.on("end",()=>{
        var corpoBuffer = Buffer.concat(bufferLoading).toString();

        console.log(corpoBuffer);
        console.log(res.statusCode);
    })

})
/*
request.write(JSON.stringify(json));
*/
request.end();
