function removeChar(str){
  if(str.length >2){
    return str.slice(1, str.length - 1)
  }
  return ''
};
console.log(removeChar("gambira"))