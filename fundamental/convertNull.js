function convertNullableValues(obj){
  for(key in obj){
    if(obj[key] === undefined){
      obj[key] = " "
    } 

    if(obj[key] === null){
      obj[key] = 0
    } 
  }
  return obj
}
const obj = {
  name: null,
  age:undefined,
  city:"Gisenyi"
}
console.log(convertNullableValues(obj))