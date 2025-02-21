function removeRep(arr){
  return arr.filter((item, index) => arr.indexOf(item) == index)
  // let unique = []
  // arr.forEach(i => {
  //   if(!unique.includes(i)){
  //     unique.push(i)
  //   }
  // })
  // console.log(unique)
}
console.log(removeRep([1,'d',2,'d']))