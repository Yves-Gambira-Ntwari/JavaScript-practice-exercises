function findUniq(arr) {
//  const same =  arr.filter((item,index) => index !== arr.indexOf(item))
//  let result = 0
//  for(let item of arr){
//   for(let newitem of same){
//     if(item !== newitem){
//        result = item
//     }
//   }
//  }
//  return result
let count ={}
arr.forEach(item=>{
  count[item] = (count[item] ||0)+1
})
const unique = Number(Object.keys(count).find(item => count[item] === 1))
return unique
}
console.log(findUniq([ 1, 1, 1,2, 1, 1 ]))