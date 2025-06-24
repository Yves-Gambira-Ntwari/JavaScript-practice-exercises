// console.log('callback')
// function foo(bar){
//   bar();
// }

// foo(function(){
//   console.log('bar')
// })

orderPizza('veg', 'Cheeze Barbeque')

 function orderPizza(type, name, callback){
  console.log(`Pizza ${type} ${name} is ordered`)
  setTimeout(function(){
    const msg = `Pizza ${type} ${name} is ready`
    callback(msg)
    }, 2000)
  }