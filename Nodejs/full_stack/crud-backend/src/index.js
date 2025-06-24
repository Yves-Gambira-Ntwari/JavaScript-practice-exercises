import express from 'express'
import cors from 'cors'
import { clientRouter } from "./router/clientRouter.js"
const app = express()
app.use(cors())
app.use(express.json())
const PORT = 3000;

app.use("/clients", clientRouter)

app.listen(PORT, (req, res) => {
  console.log('running on 3000')
})