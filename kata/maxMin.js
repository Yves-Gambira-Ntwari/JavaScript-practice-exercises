function minMax(arr){
  const max = Math.max.apply(null, arr)
  const min = Math.min.apply(null, arr)
  return [min,max]
}
console.log(minMax([92,2,1,4]))