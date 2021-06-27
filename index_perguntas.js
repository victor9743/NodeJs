// saida de dados node process.stdout.white

//process.stdout.write("Hello Wolrd \n\n\n\n");

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E oque eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index =0) =>{
    process.stdout.write("\n\n" +questions[index] + " >");
}

ask()

const anwers =[]

//entrada de dados
process.stdin.on("data", data => {
    anwers.push(data.toString().trim())

    if(anwers.length < questions.length){
        ask(anwers.length);
    }else{

        console.log(anwers);
            //finalizar processo
         process.exit()
        
    }
    
})

process.on('exit', ()=>{

    console.log(
     "Bacana Victor O que você aprendeu hoje foi: ${anwers[0]}  O que te aborreceu e você poderia melhorar foi: ${anwers[1]} O que te deixou feliz hoje: ${anwers[2]} Você ajudou ${anwers[3]}  pessoas hoje!"

    +"volte sempre"

    )
})