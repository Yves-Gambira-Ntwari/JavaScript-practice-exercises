const combineNumbers  = (array)=>{
  const even = array.filter(ele => ele % 2 ===0).join("")
  const odd = array.filter(ele => ele % 2 !==0).join("")
  const final = [...[even],...[odd]]
  console.log(final)
}

console.log(combineNumbers([1,2,3,4,5,6,7,-3]))