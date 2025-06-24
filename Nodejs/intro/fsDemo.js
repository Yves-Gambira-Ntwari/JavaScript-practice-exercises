// import fs from 'fs'; // for callbacks
import { read } from 'fs';
import fs from 'fs/promises'; // for promises



// // Read a file  - callback
// fs.readFile('./text.txt', 'utf8', (err, data) =>{
//   if(err) throw err;
//   console.log(data);
// })

// // Read a file - synchronous version
// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data);

// // read file - promise version
// fs.readFile('./text.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

  // Red file - async/await version
  const readFile = async () => {
    try{
      const data = await fs.readFile('./text.txt', 'utf8');
      console.log(data);
    }
    catch(err){
      console.log(err);
    }
  }


  const writeFile = async () => {
    try{
      await fs.writeFile('./text.txt', 'Hello I am accessing my file!');
      console.log('File written successfully!');

    }
    catch(err){
      console.log(err);
    }

  }

  const appndFile = async () => {
    try{
      await fs.appendFile('./text.txt', '\nHello I am appending to my file!');
      console.log('File appended successfully!');

    }
    catch(err){
      console.log(err);
    }
  }

  // writeFile();
appndFile();
  readFile();