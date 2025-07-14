function getCount(str) {
  let vowels = /[aeiuo]/
  return str.split("").filter(ele=> ele.match(vowels)).length
}
console.log(getCount("Gambira ntwari yves"))  