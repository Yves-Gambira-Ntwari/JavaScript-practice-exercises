import http from 'http';
const PORT = process.env.PORT;

const notes = [
  {id: 1, title: 'Note 1', content: 'This is note 1'},
  {id: 2, title: 'Note 2', content: 'This is note 2'},
  {id: 3, title: 'Note 3', content: 'This is note 3'},
  {id: 4, title: 'Note 4', content: 'This is note 4'},
]

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
}

const fetchNotes = (req, res) => {

}
 

const server  = http.createServer((req, res) =>{
  logger(req, res, () => {
     if(req.method === 'GET' && req.url === '/api/notes'){ 
    res.setHeader('Content-Type', 'application/json')
    res.write(`This server is runnig on port ${PORT}`)
    res.write(JSON.stringify(notes))
    res.end()
  } 
  else if(req.method === 'GET' && req.url.match(/\/api\/notes\/[0-9]+/)){
    const id = req.url.split('/')[3]
      const activeNote = notes.filter(note => note.id === parseInt(id))
      if(activeNote){
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(activeNote))
      res.end()
      }
    } else if(req.method === 'POST' && req.url.match('/api/notes/delete/[0-9]+')){
      const id = req.url.split('/')[4]
      const deleteid = notes.filter(note => note.id !== parseInt(id))
      res.setHeader('Content-Type', 'application/json')
      res.write(JSON.stringify(deleteid))
      res.end()
    } else if(req.method === 'POST' && req.url.match('/api/notes/add')){
      const newNote = {
        id: notes.length + 1,
        title: 'New Note',
        content: 'This is a new note'
      }
      
      notes.push(newNote)
      res.setHeader('Content-Type', 'application/json')
      res.write(JSON.stringify(notes))
      res.end()
    }
  })
})
 
server.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`)
})