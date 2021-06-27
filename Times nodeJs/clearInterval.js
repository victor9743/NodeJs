// clearInterval irá cancelar um setInterval registrado

const timeout = 1000;



const checking = () => console.log("carregando");

let interval = setInterval(checking,timeout)

let limite = 10000;

setTimeout( () => clearInterval(interval),limite)
