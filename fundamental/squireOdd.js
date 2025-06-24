function oddSquire(array){
  const squire = array.filter(ele => ele % 2 !== 0).map(ele => ele**2)
  return squire
}

console.log(oddSquire([10, 15, 20, 25, 30]))