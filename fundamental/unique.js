function unique(arr) {

  return arr.filter((ele, index) => arr.indexOf(ele) !== index)
}
console.log(unique([1, 2, 1, 2]))