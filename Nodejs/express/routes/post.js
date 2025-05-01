import express from 'express'
const router = express.Router()
let posts = [
  { id: 1, title: 'Post 1', content: 'Content of Post 1' },
  { id: 2, title: 'Post 2', content: 'Content of Post 2' },
  { id: 3, title: 'Post 3', content: 'Content of Post 3' },
  { id: 4, title: 'Post 4', content: 'Content of Post 4' }
]


const logger = (req,res,next) =>{
  console.log(`${req.method} ${req.protocol}://${req.host}`)
  next()
} 

// app.use(express.static(path.join(__dirname, 'public')));
router.get('/', logger, (req, res) => {
  const limit = parseInt(req.query.limit)
  if (limit > 0) {
    res.json(posts.slice(0, limit))
  } else {

    res.json(posts);
  }

})
router.use(logger)

router.get('/:id', logger, (req, res) => {
  const id = parseInt(req.params.id)
  const post = posts.find((post) => post.id === id)
  if (post) {
    res.json(post)
  } else {
    res.status(404).json({ message: `The id ${id} is not found` })
  }

})

// Create new post
router.post('/', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title
  }
  if (!(newPost.title)) {
    return res.json({ msg: 'Please enter title' })
  }
  posts.push(newPost)

  res.json(posts)
})

// Update post
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id)

  if (!post) {
    return res.status(404).json({ msg: 'not found' })
  }
  post.title = req.body.title
  res.status(200).json(post)
})

export default router