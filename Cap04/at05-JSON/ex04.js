const jogadores = `[

    {"id": 1, "jogador":"Neymar","selecao": "Brasil"},
    {"id": 2, "jogador":"Vini Jr","selecao": "Brasil"},
    {"id": 3, "jogador":"Endrick","selecao": "Brasil"},
    {"id": 4, "jogador":"Rayan","selecao": "Brasil"},
    {"id": 5, "jogador":"Messi","selecao": "Argentina"},
    {"id": 6, "jogador":"Cr7","selecao": "Portugal"}
    
    ]`
    
    const objJogadores = JSON.parse(jogadores)
    
    const brasil = objJogadores.filter(jogador=> jogador.selecao ==="Brasil")
    
    console.log(brasil)