import fs from 'fs'; // for callbacks
import fs from 'fs/promises'; // for promises



// Read a file  - callback
fs.readFile('./text.txt', 'utf8', (err, data) =>{
  if(err) throw err;
  console.log(data);
})

// Read a file - synchronous version
const data = fs.readFileSync('./text.txt', 'utf8');
console.log(data);

// read file - promise version
fs.readFile('./text.txt', 'utf8')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));