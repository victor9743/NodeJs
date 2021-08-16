module.exports = ()=>{
    this.getNoticias = (connection,callback)=>{
        connection.query("select * from noticias",callback);
    }

    this.salvarNoticia = (connection, produto ,callback)=>{
    
        connection.query("insert into produtos set ?", produto, callback);
    }

    return this;
}