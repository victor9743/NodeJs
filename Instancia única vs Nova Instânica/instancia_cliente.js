const contadorA = require("../Instancia única vs Nova Instânica/instancia_unica");
const contadorB = require("../Instancia única vs Nova Instânica/instancia_unica");

const contadorC = require("../Instancia única vs Nova Instânica/instancia_nova")()
const contadorD = require("../Instancia única vs Nova Instânica/instancia_nova")()

contadorA.inc();
contadorA.inc();

console.log(contadorB.valor)


contadorC.inc();
contadorC.inc();

console.log(contadorC.valor, contadorD.valor);