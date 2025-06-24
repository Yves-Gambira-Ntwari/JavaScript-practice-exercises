import express from "express";
import { db } from "../db.js"
export const clientRouter = express.Router()


clientRouter.get("/", async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM client_tb order by id asc")
    return res.json(data.rows)
  } catch (error) {
    return res.json({ error: error.message })
  }
})



clientRouter.post("/", async (req, res) => {
  const { name, email, job, rate, isactive } = req.body
  try {
    const data = await db.query(`INSERT INTO client_tb (name, email, job, rate, isactive)
       VALUES ('${name}', '${email}', '${job}', ${rate}, ${isactive})`)

    return res.json(data.rows[0])
  } catch (error) {
    console.log(error.message)
    return res.status(400).json({ error: error.message })
  }
})

clientRouter.put("/", async (req, res) => {
  const { id, name, email, job, rate, isactive } = req.body
  try {
    const data = await db.query(`UPDATE client_tb SET name = '${name}', email ='${email}', job = '${job}', 
      rate = ${rate}, isactive = ${isactive} WHERE id = ${id}`)

    return res.json(data.rows[0])
  } catch (error) {
    console.log(error.message)
    console.log(error.message)
    return res.status(400).json({ error: error.message, message: "on update" })
  }
})

clientRouter.delete(`/:id`, async (req, res) =>{
  const id = req.params.id
  try{
    const data = await db.query(`DELETE FROM client_tb WHERE id = ${id}`)
  } catch(error){
    return res.status(400).json({error: error.message})
  }
})