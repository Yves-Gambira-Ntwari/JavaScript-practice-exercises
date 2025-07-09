function digPow(n, p){
  const string = n.toString()
  const arr = string.split("")
  let i=p - 1
  let sum = 0
  arr.forEach(ele=>{
    i++
    const mult = ele ** i
    sum += mult
  })
 return Number.isInteger(sum /n) == false ? -1 : sum / n
}
console.log(digPow(46288, 5))