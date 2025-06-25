const factorial  = (n) =>{
  if(n === 0){
    return 1
  }
  return n * factorial(n - 1)
}
console.log(factorial(3))

const fibonacci = (n) =>{
  return n <=2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(10))