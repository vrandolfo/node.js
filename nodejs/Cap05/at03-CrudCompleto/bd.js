import pg from "pg"

const { Pool } = pg

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    ssl: {
        rejectUnauthorized: false
    }
})

const obterChavePrimaria = async (tabela) => {
    try {
        const sql = `
        SELECT kcu.column_name
      FROM information_schema.table_constraints tc
      JOIN information_schema.key_column_usage kcu
        ON tc.constraint_name = kcu.constraint_name
        AND tc.table_schema = kcu.table_schema
      WHERE tc.table_name = $1
        AND tc.constraint_type = 'PRIMARY KEY'
        `
        const result = await pool.query(sql, [tabela])
        if(result.rows.length === 0) throw new Error(`A tabela ${tabela} não possui chave primária definida`)
        return result.rows[0].column_name//nome da coluna que é a PK
    }catch(e){
        throw new Error(`Erro ao identificar PK da tabela ${tabela}: ${e.message}`)
}
}

const obterCampos = async (tabela)=>{
  try{
    const pk = await obterChavePrimaria(tabela)
    const sql = `SELECT column_name
    FROM information_schema.columns
    WHERE table_name = $1
    ORDER BY ordinal_position`
    const result = await pool.query(sql, [tabela])
    const campos = result.rows
    return{
      todos: campos.map(c => c.column_name),
      semPK: campos.filter(c => c.column_name !== pk).map(c => c.column_name),
      pk:pk
    }
  }catch(e){
    throw new Error(`Tabela ${tabela} inválida: ${e.message}`)
  }
}

export const inserir = async (tabela, dados)=>{
  const info = await obterCampos(tabela)
  const campos = info.semPK.join(',')
  const placeholders = info.semPK.map((_,i)=>`$${i+1}`).join(',')

  const sql = `INSERT INTO ${tabela} (${campos}) VALUES (${placeholders}) RETURNING ${info.semPK}`

  const valores = info.semPK.map(campo=>dados[campo])
  const result = await pool.query(sql, valores)
  return { [info.pk]: result.rows[0][info.pk], status:201}
}



