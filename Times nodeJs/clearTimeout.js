// clearTimeout cancelar um timeout
const tempo = 5000;

const valor = () => console.log("hello wolrd");

let timer = setTimeout(valor,tempo)

clearTimeout(timer);