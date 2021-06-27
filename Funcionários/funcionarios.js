const url ="http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");


/* criação de parametros de busca */
const chineses =f => f.pais === 'China'

const mulheres = f => f.genero === 'F'

const id = f => f.id === 100;

const menorsalario=(func, funcAtual)=>{
    return func.salario < funcAtual.salario ? func : funcAtual

}

axios.get(url).then( response =>{
    const funcionarios = response.data

    /*console.log(funcionarios);*/

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorsalario)
        //.filter(id);

    console.log(func)
})