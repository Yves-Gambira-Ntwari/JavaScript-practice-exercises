// This is to access agrv
console.log(process.argv)
console.log(process.argv[2])

// Process.env
console.log(process.env.LOGNAME)

// Process.pid
console.log(process.pid)

// cwd
console.log(process.cwd())

// Title
console.log(process.title)
// Memory usage
console.log(process.memoryUsage())
// Uptime
console.log(process.uptime())

process.on('exit', (code) => {
  console.log(`Process exited with code: ${code}`)
})
// exit
process.exit(0) // This is for total error
process.exit(1) // This is for success

