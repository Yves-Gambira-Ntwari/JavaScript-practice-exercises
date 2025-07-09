function fakeBin(x){
  const check = x.split("").map(ele=> ele>=5? "1": "0")
  return check.join("")
}
console.log(fakeBin("52672"))