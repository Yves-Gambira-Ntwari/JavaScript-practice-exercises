function findUniq(arr) {
let count ={}
arr.forEach(item=>{
  count[item] = (count[item] ||0)+1
})
const unique = Number(Object.keys(count).find(item => count[item] === 1))
return unique
}
console.log(findUniq([ 1, 1, 1,2, 1, 1 ]))