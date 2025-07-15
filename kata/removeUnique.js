function stray(numbers) {
  const same =  numbers.filter((ele,index)=> index !== numbers.indexOf(ele))
  for(let item of same){
    for(let ele of numbers){
      if(ele !== item){
        return ele
      }
    }
  }
}

console.log(stray([ 1, 1, 2 ]))