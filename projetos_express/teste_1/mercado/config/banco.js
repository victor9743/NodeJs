var conexao = require('mysql');

var conexaosql = ()=>{

    return conexao.createConnection({
        host: 'localhost',
        user: 'root',
        password:'1234',
        database:'mercado'
    })

}

module.exports = ()=>{

    return conexaosql
}