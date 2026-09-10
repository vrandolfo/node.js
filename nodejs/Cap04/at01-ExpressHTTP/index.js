import express from 'express'

const app = express()

app.get('/', (req, res)=>{res.send('<h1>Olá mundo</h1>')})

app.get('/cadastro', (req, res)=>{res.send('<h1>Página de cadastro</h1>')})

app.get('/sobre', (req, res)=>{res.send('<h1>Página sobre...</h1>')})

app.get('/usuario', (req, res)=>{res.send('<h1>Página de usuário</h1>')})

app.listen(3000, ()=>{
    console.log("Aplicação rodando em http://localhost:3000")
})
