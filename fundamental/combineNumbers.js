const combineNumbers  = (array)=>{
  const even = array.filter(ele => ele % 2 ===0).join("")
  const odd = array.filter(ele => ele % 2 !==0).join("")
  const final = [...[even],...[odd]]
  console.log(final)
}

console.log(combineNumbers([1, 3, 5, 4, 9, 6, 45, 11, 8, 22]))