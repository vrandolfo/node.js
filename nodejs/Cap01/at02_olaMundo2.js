const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("Olá, mundo!")

rl.question("Qual é o seu nome? \n", async nome=>{
    console.log(`Olá ${nome}`)
    rl.close()
})
console.log("Olá Node!!!!")