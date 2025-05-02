import express, { json } from 'express'
import cors from 'cors'
import router from './router/clientRouter'

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.use('api/', router)

app.listen(port, (req, res) => {
  console.log(`listen to port ${port} ...`)
})