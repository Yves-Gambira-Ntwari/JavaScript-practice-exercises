// function removeRep(arr){
//   return arr.filter((item, index) => arr.indexOf(item) == index)
//   // let unique = []
//   // arr.forEach(i => {
//   //   if(!unique.includes(i)){
//   //     unique.push(i)
//   //   }
//   // })
//   // console.log(unique)
// }
// console.log(removeRep([1,'d',2,'d']))

// Create a class Product with properties name (string), 
// price (number), and methods: getDetails(): Returns a string representation of the product details (name and price). 
// applyDiscount(discount): Applies a discount (percentage) to the product's price and returns the discounted price.

class Product{
  constructor(proName, price, discount){
    this.proName = proName;
    this.price = price;
    this.discount =discount;
  }
  getDetails(){
    return `You sell ${this.proName} cost ${this.price}`
  }
  applyDiscout(){
    return `You sell ${this.proName}  discount is ${(this.price * this.discount)/100}%`
  }
}
const ProductObj = new Product('Ibitoki', 120, 10)
console.log(ProductObj.getDetails())
console.log(ProductObj.applyDiscout())