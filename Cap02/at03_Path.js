const path = require('path')

let arquivo = './at03_Path.js'

console.log("Extensão: ", path.extname(arquivo))
console.log("Nome completo: ", path.basename(arquivo))
console.log("Unidade base: ", path.dirname(arquivo))
console.log("Caminho absoluto: ", path.resolve(arquivo))