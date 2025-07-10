function towerBuilder(nFloors) {
  let times = nFloors*2
  let curr = 1
  let arr = []
  if(nFloors == 1){
    arr.push("*")
  } else{
  while(curr <= times){
      arr.push(" ".repeat(Math.ceil((times-(curr+1))/2))+ "*".repeat(curr)+" ".repeat((times-curr)/2))
      curr +=2
    }
  }
  return arr
}
console.log(towerBuilder(3))