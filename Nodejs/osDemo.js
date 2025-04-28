import os from 'os';
// userInfo
console.log(os.userInfo().username);

// totalmem
console.log(os.totalmem() / 1024 / 1024 / 1024); // GB
// freemem
console.log(os.freemem() / 1024 / 1024 / 1024); // GB

// cpus
console.log(os.cpus().length); // CPU cores