import {createServer} from 'http'
const PORT = process.env.PORT

const users = [
  {id: 1, name: 'Gambira'},
  {id: 2, name: 'Kevin'},
  {id: 3, name: 'Samuel'},
  {id: 4, name: 'Ntwari'},
  {id: 40, name: 'Ntwari'}
]


const server = createServer((req, res) =>{
  if(req.method == 'GET' && req.url == '/api/users'){
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(users))
  } 
  else if(req.method == 'GET' &&  req.url.match(/\/api\/users\/([0-9]+)/)){
    const id = req.url.split('/')[3]
    const user = users.find((user) => user.id === parseInt(id))
    if(user){
      res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(user))
    res.end()
    }else{
      res.setHeader('Content-Type', 'application/json')
    res.statusCode = 404
    res.write(JSON.stringify({message: "user not Found"}))
    res.end()
    }
    
  }
  
  else{
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 404
    res.write(JSON.stringify({message: "not Found"}))
    res.end()
  }
})

server.listen(PORT, () =>{
  console.log(`Server is running on ${PORT}`)
})