function arrayDiff(a, b) {
  return a.filter(item => !b.includes(item))
}
console.log(arrayDiff([1,2,3], [3,3,4,2]))