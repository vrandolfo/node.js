import express from 'express'

const app = express()
const PORT = 3000

app.get("/", (req, res)=>{ 

    const {nome, endereco=""} = req.query

    if(!nome){
        res.send(`
        <h1>Informe seu nome</h1>
        <form method="GET">
            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome" placeholder="Digite aqui..." required /><br>
            <label for="endereco">Endereço:</label>
            <input type="text" name="endereco" id="endereco" placeholder="Digite aqui..." />
            <input type="submit" value="Enviar" />
        </form>
        `) 
    }else{
        res.send(`<h1>Usuário: ${nome}</h1><br>
                    <h1>Endereço: ${endereco}</h1>
        `)
    }
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})