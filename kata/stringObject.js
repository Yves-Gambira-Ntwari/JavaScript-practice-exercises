var number=function(array){
  return array.map((ele, index) => `${index+1}: ${ele}`)
}

console.log(number(["a", "b", "c"]))