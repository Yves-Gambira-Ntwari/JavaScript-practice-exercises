function invert(array) {
   const invert = array.map(ele => ele > 0 ? Number("-"+ele):Number(ele.toString().slice(1)))
   return invert
}
console.log(invert([1, 2, -3, 4, 5]))