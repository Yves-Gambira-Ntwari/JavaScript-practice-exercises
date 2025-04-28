import fs from 'fs';


const filename = process.argv[2];

if (!filename) {
  console.error('Please give a filename.');
  process.exit(1);
}





// const readFile = async () => {
//   try{
//     const data = await fs.readFileSync(filename, 'utf8');
//     console.log(data);
//   }
//   catch(err){
//     console.log("file not found! Please check the file name and path.");
//   }
// }

// readFile();

