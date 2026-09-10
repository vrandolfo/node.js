import http from "http"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "url"

const PORT = 3000

const __filename = fileURLToPath(import.meta.url)/// pega o caminho do arquivo
const __dirname = path.dirname(__filename)

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`)

    let pagina = urlObj.pathname.substring(1)

    pagina = pagina === '' ? 'index.html' : pagina

    if (!pagina.includes('html')) {
        pagina += '.html'
    }

    let caminhoArquivo = path.join(__dirname, pagina)

    if (fs.existsSync(caminhoArquivo)) {
        fs.readFile(caminhoArquivo, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' })
                return res.end('<h1>Erro interno do servidor</h1>')
            }

            res.writeHead(200, { 'content-type': 'text/html' })
            res.end(data)
        })
    }

    else{
        caminhoArquivo = path.join(__dirname,'pg404.html')
        fs.readFile(caminhoArquivo,(err, data)=>{
            res.writeHead(404, {'content-type': 'text/html'})
            res.end(data)
        })
    }
})

server.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
}) 
