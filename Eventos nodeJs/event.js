/* inciar um evento

const { EventEmitter }= require('events');


const ev = new EventEmitter()


// ouvir e executar um evento

ev.on('Hello Wolrd',(name)=>{
    console.log("deu certo", name);
});

// ouvir apenas um unica vez
ev.once('Hello Wolrd',(name)=>{
    console.log("deu certo once", name);
});


//emitindo evento
ev.emit('Hello Wolrd',"Victor");
ev.emit('Hello Wolrd',"Maria");
ev.emit('Hello Wolrd',"José");
ev.emit('Hello Wolrd',"Bia");

//herdando do evento eventemitter
*/
const { inherits } = require('util');

const { EventEmitter } = require('events');

function character(name){
    this.name = name;
}

//processo de herança do eventEmitter
inherits(character, EventEmitter)

const chapolin = new character("chapolin");

chapolin.on('help', ()=> console.log('eu o ' + chapolin.name +' colorado'));

console.log("Oh! e agora, que, poderá me defender?")

chapolin.emit('help');
