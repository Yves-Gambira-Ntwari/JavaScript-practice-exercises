function squareDigits(num){
 const newNum =  num.toString().split("")
 const arr = newNum.map(ele => Number(ele) * Number(ele)).join("")
  return Number(arr)
}
console.log(squareDigits(2112))