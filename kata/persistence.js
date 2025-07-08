// function persistence(num) {
//   const toString = num.toString().split("").map(elem=>Number(elem))
//   console.log(toString.reduce((exist,curr)=>curr*exist))
  
// }
let numCount = 1
function parentFunction(num){
  if(num > 9){
    const myNum = num.toString()
    num =  myNum.split("").map(elem=>Number(elem)).reduce((exist,curr)=>curr*exist,1)
    if(num > 9){
      numCount++
      return parentFunction(num)
    } else{
      return numCount
    }
  } else{
    return 0
  }
  }


console.log(parentFunction(3));
