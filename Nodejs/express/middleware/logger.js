
const logger = (req,res,next) =>{
  console.log(`${req.method} ${req.protocol}://${req.host}`)
  next()
} 
export default logger