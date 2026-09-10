const novoAluno = { 
    nome: "carlos", 
    curso: "Tecnico em informatica", 
    UC: 13, 
    ensinoMedComp: true 
  };
  
  // Adicionamos 'null' e '2' para formatar (pretty print) o JSON
  const dadosTratados = JSON.stringify(novoAluno, null, 2);
  
  console.log(dadosTratados);

