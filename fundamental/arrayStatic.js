function arrayStatic (array){
  const static = {}
  static.max = Math.max.apply(Math, array)
  static.min = Math.max.apply(Math, array)
  static.sum = array.reduce((a,b) => a + b)
  static.average = array.reduce((a, b) => a+b / array.length)
  return static
}

console.log(arrayStatic([1,2,3,4,5]))