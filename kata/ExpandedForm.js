function expandedForm(num) {
  str = num.toString()
  const arr = str.split("")
  return arr.map((ele,index) => ele + "0".repeat(arr.length - (index+1))).filter(ele => +ele !== 0).join(" + ")
}
console.log(expandedForm(70304))