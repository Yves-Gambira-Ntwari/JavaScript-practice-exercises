import http from "http"
const PORT = 8000
const server =http.createServer((req,res) =>{

if(req.url === '/'){
    res.statusCode =200
    res.setHeader('content-Type','text/html') 
    res.end('<h1>homePage</h1>')
}
else if(req.url === '/about'){
    res.statusCode =200
    res.setHeader('content-Type','text/html') 
    res.end('<h1>about page</h1>') 
}else{
    res.statusCode =404
    res.setHeader('content-Type','text/html') 
    res.end('<h1>Page not found</h1>')
}
   
})

server.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})