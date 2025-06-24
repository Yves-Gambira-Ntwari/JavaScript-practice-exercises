import {createServer} from 'http'
const PORT = process.env.PORT

const users = [
  {id: 1, name: 'Gambira'},
  {id: 2, name: 'Kevin'},
  {id: 3, name: 'Samuel'},
  {id: 4, name: 'Ntwari'},
  {id: 40, name: 'Ntwari'}
]

const logger = ((res, req, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

const jsonMiddleware = ((res, req, next) =>{
  res.setHeader('Content-Type', 'application/json')
  next()

})
const getUserHandler = ((res, req) =>{
res.write(JSON.stringify(users))
res.end()
})

const getUserByIdHandler = ((res,req) =>{
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
})

const notFoundHandler = ((res, req) =>{
  res.statusCode = 404
  res.write(JSON.stringify({message: "not Found"}))
  res.end()
})

const createUserHandler = ((res, req) =>{
  let body = ''
  req.on('data', (chunk) =>{
    body += chunk.toString()
  })
  req.on('end', ()=>{
    const newUser = JSON.parse(body)
    users.push(newUser)
    res.statusCode = 201
    res.write(JSON.stringify(newUser))
    res.end()
  })
})

const server = createServer((req, res) =>{
  logger(res, req, () => {
    if(req.method == 'GET' && req.url == '/api/users'){
      getUserHandler(req, res)
    } 
    else if(req.method == 'GET' &&  req.url.match(/\/api\/users\/([0-9]+)/)){
      getUserByIdHandler(res, req)
    } else if(req.method == 'POST' && req.url == '/api/users'){
      createUserHandler(res, req)
    }
    else{
      notFoundHandler(res, req)
    }
  })
})

server.listen(PORT, () =>{
  console.log(`Server is running on ${PORT}`)
})