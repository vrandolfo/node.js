import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dbConnection from './bd.js'
import dotenv from 'dotenv'


const app = express()
const PORT = process.env.PORT 
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const baseDir = path.join(__dirname, 'templates')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
    res.sendFile(path.join(baseDir, 'index.html'))
})
app.get('/cadastrar', (req, res)=>{
    res.sendFile(path.join(baseDir, 'cadastrar.html'))
})

app.post('/cadastrar/pets', async (req, res)=>{
    try{
        const { id_cli, nome, sexo, especie, raca, peso, tamanho, idade, doenca, obs } = req.body 
    
        const sql = `INSERT INTO pets (id_cli, nome, sexo, especie, raca, peso, tamanho, idade, doenca, obs)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id
        `
        const con = await dbConnection()
        const result = await con.query(sql, [id_cli, nome, sexo, especie, raca, parseFloat(peso), tamanho, parseInt(idade), doenca, obs])
        con.release()
        res.status(201).json({ status: 201, id: result.rows[0].id })
    }
    catch (e){
        res.status(400).json({ erro: e.message })
    }
})






app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

