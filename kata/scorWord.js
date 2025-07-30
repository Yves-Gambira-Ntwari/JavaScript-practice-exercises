function high(word){
  const arr = word.split(" ")
  const high = arr.map(el=>el.split("").map(single=>single.charCodeAt()-96).reduce((a,b)=>a+b))
  const max = high.indexOf(Math.max.apply(null, high))
  return arr[max]
}
console.log(high("gambira ntwari yves"))