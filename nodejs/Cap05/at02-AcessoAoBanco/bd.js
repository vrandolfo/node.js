import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:{
    rejectUnauthorized: false
  }
})

const dbConnection = async () => {
  const client = await pool.connect()
  return client
}


export default dbConnection