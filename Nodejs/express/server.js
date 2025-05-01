import express from 'express'
import path from 'path'
import posts from './routes/post.js'
import logger from './middleware/logger.js'

const PORT = process.env.PORT || 8000

const app = express();


// body parse middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(logger)

app.use('/api/posts',posts)



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));