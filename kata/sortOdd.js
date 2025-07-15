function sortArray(array) {
  const filter = array.filter(ele => ele % 2 !== 0).sort()
  return array.map(element=>{
    if(element%2 ==0){
      return element
    }
    let newValue = filter[0]
    filter.shift()
    return newValue
  })
}

console.log(sortArray([5, 8, 6, 3, 4]))