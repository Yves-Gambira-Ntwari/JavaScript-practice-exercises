import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;
const server = http.createServer( async(req, res) => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename)
  try {
    if (req.method == 'GET') {
      let filePaht;
      if (req.url === "/") {
        filePaht = path.join(__dirname, 'public', 'index.html')
      } else if (req.url === "/about") {
        filePaht = path.join(__dirname,'public', 'about.html')
      } else {
        throw new Error("File Not Found")
      }

      const data = await fs.readFile(filePaht)
      res.setHeader('Content-Type', 'text/html')
      res.write(data)
      res.end()
    } else {
      throw new Error("Method Not Allowed")
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Server Error')
  }

});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
