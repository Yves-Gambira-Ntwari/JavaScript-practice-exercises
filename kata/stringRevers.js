function reverseWords(str) {
  const array = str.split(" ")
  const reverse = array.map(ele => ele.split("").reverse().join("")).join(" ")

  return reverse
}
console.log(reverseWords("Gambira ntwari Yves"))