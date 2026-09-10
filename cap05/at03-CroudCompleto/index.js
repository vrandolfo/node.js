import express from "express"
import path from 'node:path'
import { fileURLToPath } from "node:url"
import * as bd from './bd.js'

const app = express()
const PORT = process.env.PORT || 3200
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const baseDir = path.join(__dirname, 'templates')
app.use(express.json())

app.get("/", (req, res)=>{
    res.sendFile(path.join(baseDir, 'index.html'))
})

app.post('/:tabela', async (req, res)=>{
    try{
        res.status(201).json(await bd.inserir(req.params.tabela, req.body))
    }
    catch(e){
        res.status(400).json({erro: e.message})
    }
})

app.delete('/:atbela/:id', async (req, res)=>{
    try { res.json(await bd.deletar(req.params.tabela, req.params.id))}
    catch (e) { res.status(400).json({erro: e.message})}
})

app.listen(PORT, ()=>{console.log(`Servidor rodando em http://localhost:${PORT}`)})