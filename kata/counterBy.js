function countBy(x, n) {
  let z = []
  for(let i = x; z.length <n; i+=x){
    z.push(i)
  }
  return z
}
console.log(isNaN(3))

console.log(countBy(3,5))