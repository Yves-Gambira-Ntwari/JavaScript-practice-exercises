function findNextSquare(sq) {
  let square =  Math.sqrt(sq)
  if(!(Number.isInteger(Math.sqrt(sq)))){
    return -1
  } else{
    square++
    return square * square
  }
}

console.log(findNextSquare(625))
