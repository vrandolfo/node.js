import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const app = express()
const PORT = process.env.PORT

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseDir = path.join(__dirname, 'templates')

app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(baseDir, 'index.html'))
})

app.get('/cadastrar', (req, res)=>{
    res.status(200).sendFile(path.join(baseDir, 'cadastrar.html'))
})

app.use((req, res)=>res.status(404).sendFile(path.join(baseDir, '404.html')))

app.listen(PORT, ()=>console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`))
