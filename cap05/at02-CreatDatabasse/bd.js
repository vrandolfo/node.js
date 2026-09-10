import dotenv from "dotenv"
dotenv.config()
import pg from 'pg'

const { Pool } = pg

// VAMOS TESTAR O QUE O NODE ESTÁ LENDO EXATAMENTE:
console.log("--- DEBUG CONEXÃO ---");
console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("---------------------");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

const dbConnection = async () => {
  const client = await pool.connect()
  return client
}

export default dbConnection