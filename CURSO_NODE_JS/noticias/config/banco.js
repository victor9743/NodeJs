  //sql

  var mysql = require('mysql')


  var connsql = function(){

    return  mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password:'1234',
      database: 'portal_noticias'

  })


  }

  module.exports = ()=>{

      // return connsql

      return connsql
    
}





