import { Client } from "pg"

const conn = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "12345678",
  database: "dvdrental"
})

conn.connect().then(() => console.log("Connected to PostgreSQL database"))
conn.query('select *from actor fetch first 10 rows only', (err, res) =>{
  if(!err){
    console.log(res.rows)
  } else{
    console.log(err.message)
  }
})