function compressString(str){
  const arr = str.split("")
  let myOcc = 1;
  let newArr = []
  const occ = arr.forEach((ele,ind) => {
    if(ele == arr[ind+1]){
      myOcc++;
    } else{
      newArr.push(ele + myOcc)
      myOcc = 1
    }
  })
  return newArr.join("")
}

console.log(compressString("AAAABBBCCAAF"))
