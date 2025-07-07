function solution(string) {
  const done = []
  const arr = string.split("").forEach((ele) =>{
    if(ele == ele.toUpperCase()){
      done.push(` ${ele}`)
    }else
    {
      done.push(ele)

    }
  })
  return done.join("")
}
console.log(solution("ddd"))