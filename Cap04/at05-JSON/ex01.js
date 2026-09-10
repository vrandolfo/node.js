const jsonRecebido = `{
    "nome": "maria",
    "curso": "Técnico em informática",
    "UC": 13
}`

console.log(jsonRecebido)

console.log(jsonRecebido.nome)

const objTransformado = JSON.parse(jsonRecebido)

console.log(objTransformado.curso)

