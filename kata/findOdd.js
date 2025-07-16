function findOdd(A) {
const count = {}
A.forEach(el =>{
   count[el] = (count[el] ?? 0) +1
  })
  const oddCount = Object.keys(count)
  .filter(ele => count[ele] %2 !== 0)
  .map(Number)
  return oddCount
}

console.log(findOdd([1,2,2,2,1,3]))