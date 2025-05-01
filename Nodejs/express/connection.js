import {Client} from 'pg'
import express from 'express'

const conn = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: "12345678",
  database: "dvdrental"
})

const PORT = process.env.PORT || 8000
const app = express();

conn.connect()


app.get('/', (req, res)=>{
  conn.query('select *from actor fetch first 5 rows only', (err,res)=>{
    if(!err){
      console.log(res.rows)
    } else{
      console.log(err.message)
    }
    conn.end()
  })
})

app.listen(PORT, () => console.log(`Server ruuning on ${PORT}`))

