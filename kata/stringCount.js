function getMiddle(s) {
  const length = s.length
  let charAt;
  if(length % 2 === 0){
    const middlenmber = length / 2
    const middlenmber2 = (length / 2) + -1
    charAt = `${s.charAt(middlenmber2)}${s.charAt(middlenmber)}`
    console.log(middlenmber)
    console.log(middlenmber2)

  } else{
     const middlenmber = length / 2
     charAt = s.charAt(middlenmber)
  }
    return charAt;
}

console.log(getMiddle("abca"))