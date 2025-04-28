import url from 'url';
import path from 'path';
const filePath = '/dir1/dir2/dir3/text.txt';
// basename
// console.log(path.basename(filePath))
// // dirname
// console.log(path.dirname(filePath))
// // extname
// console.log(path.extname(filePath))
// // parse
// console.log(path.parse(filePath))

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename); // D:\TheGym\JavaScript-practice-exercises\Nodejs\pathDemo.js
console.log(__dirname); // D:\TheGym\JavaScript-practice-exercises\Nodejs

const filePath2 = path.join(__dirname, 'text.txt');
console.log(filePath2); // D:\TheGym\JavaScript-practice-exercises\Nodejs\text.txt