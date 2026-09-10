import express from "express"
const app = express()
const PORT = 3000
app.get("/", (req, res)=>{
    res.send('<h1>Página inicial</h1>')
})

app.get(["/bemvindo", "/bemvindo/:nome"], (req, res)=>{

    const {nome} = req.params

    if(nome){
        res.send(`<h1>Bem vindo ${nome}</h1>`)
    }else{
        res.end(`<h1>Nome indefinido</h1>`)
    }

})

app.listen(PORT, ()=>{
    console.log(`Aplicação rodando em http://localhost:${PORT}`)
})