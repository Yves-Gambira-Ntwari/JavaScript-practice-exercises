function countSmileys(arr) {
  let exp = /^(?:[:;])(?:[-~])?(?:[)D])$/
  return arr.filter(ele => ele.match(exp)).length
}
console.log(countSmileys([':D',':~)',';~D',':)']))