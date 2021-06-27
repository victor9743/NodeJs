// SetInterval irá rodar uma função N vezes
// depois de x milisegundos

const timeout = 1000;

const checking = () => console.log("carregando");

setInterval(checking,timeout)