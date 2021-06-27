
module.exports = ()=>{

    this.getNoticias =(connection,callback)=>{
        connection.query("select * from noticias order by data_criacao desc", callback);
    }

    this.getNoticia =(id_noticia,connection,callback)=>{
        connection.query("select * from noticias where id_noticia ="+ id_noticia.id_noticia , callback);
    }

    this.salvarNoticia = ( connection, noticia, callback)=>{
       
        connection.query("insert into noticias set ?", noticia, callback)
    }

    this.get5UltimasNoticias = (connection, noticia, callback)=>{

        connection.query("select * from noticias order by data_criacao desc limit 5", noticia , callback);
    }

    return this;
  
}