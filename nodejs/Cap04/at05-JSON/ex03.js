const bancoDeDadosFicticio = `[
    {"id}:1,"nome":"Matrix", "ano":1999},
    {"id}":2,"nome":"O Senhor dos Anéis", "ano":2001},
    {"id}":3,"nome":"Inception","ano":2010}
]`;

const filmes = JSON.parse(bancoDeDadosFicticio)

const filmeBuscado = filmes.find(filme=> filme.id ===2)

console.log(filmeBuscado)
