import pg from 'pg'
import env from 'dotenv'

env.config()
export const db = new pg.Client({
  user: 'postgres',
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: '12345678',
  port: process.env.PG_PORT
})

db.connect().then(() => console.log("Connected"))
