
function squareSum(numbers){
  const square = numbers.map(ele => ele**2)
  
  return square.reduce((a,b) => a + b)
}
console.log(squareSum([1,2,2]))
