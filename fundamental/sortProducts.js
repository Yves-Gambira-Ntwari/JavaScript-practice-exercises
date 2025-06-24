function oddSquire(array){
  return array.sort((a,b) => a.price - b.price)
}

const array = [
  {name: "banana", price: 20},
  {name: "Apple", price: 50},
  {name: "Orange", price: 30}
]

console.log(oddSquire(array))