// function f2(){
//   console.log('f2')
// }

// function f1(){
//   console.log('f1')
// }

// function main(){
//   console.log('main');
//   setTimeout(f1, null)

//   new Promise(function(resolve, reject){
//     resolve('I am resolve promise')
//   }).then(resolve => console.log(resolve))

//   f2()
// }

// main()


// promises

let promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    // reject (new Error('Jack Fall down'))
    resolve('Water')
  }, 2000)
})


const grandParentCooking = () =>{
  promise
  .then(function(result){
    console.log(`Cooking start with ${result}`)
  })
  .catch(function(error){
    console.log(`OMG ${error.message}`)
  })
}

grandParentCooking()