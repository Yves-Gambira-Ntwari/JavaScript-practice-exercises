import crypto from 'crypto';

// Create hash
// const hash = crypto.createHash('sha256')
// hash.update('password123')
// console.log(hash.digest('hex'))

// Random bytes
// crypto.randomBytes(16, (err, buf) =>{
//   if(err) throw err
//   console.log(buf.toString('hex'))
// })

// Create cypher IV and decipher
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)
// cipher
const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update('Hello World', 'utf8', 'hex')
encrypted += cipher.final('hex')
console.log(encrypted)

// decipher
const decipher = crypto.createDecipheriv(algorithm, key, iv)
let deciphed = decipher.update(encrypted, 'hex', 'utf8')
deciphed += decipher.final('utf8')
console.log(deciphed)