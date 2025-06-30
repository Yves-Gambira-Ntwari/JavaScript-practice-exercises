
function noSpace(x){
  const space = ' '
  const noSpace = x.split("").filter(ele => ele !== ' ').join("")
  return noSpace
}
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"))
