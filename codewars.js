// function betterThanAverage(classPoints, yourPoints) {
//   classPoints = [40, 70, 80, 90];
//   yourPoints = 93;
//     let sum = 0;
//     for(let i = 0; i < classPoints.length; i++){
//       sum += classPoints[i];
//     }
//     const avg = (sum + yourPoints) / (classPoints.length + 1)

//     if(avg < yourPoints){
//       return true;
//     } else{
//       return false
//     }

// }

// console.log(betterThanAverage())

// function century(year) {
//   // Finish this :)
//   return;
// }

// function doubleChar(str) {
//   // Your code here
//   strArr = str.split('');
//   for(let i = 0; i < strArr.length; i++){
//     strArr[i] = strArr[i] + strArr[i]
//   }
//   return strArr.join('')
// }

// console.log(doubleChar('123'))
// function firstNonConsecutive (arr) {
// for(let i = 0; i <= arr.length; i++){
//   if(arr[i] +  1 == arr[i + 1]){
//     // console.log(i)
//     // console.log(i + 1)
//   } else{
//     console.log(arr[i])
//   }
// }
// }

// console.log(firstNonConsecutive([1,2,3,4,6]))

const rps = (p1, p2) => {
  if(p1 === 'paper'){
    if(p2 === 'rock'){
      return 'Player 1 won'
    } else if(p2 === 'paper'){
      return 'Draw'
    } else{
      return 'Player 2 won'
    }
  } else if( p1 === 'rock'){
    if(p2 == 'scissors'){
      return 'Player 1 won'
    } else if(p2 == 'rock'){
      return 'Draw'
    } else{
      return 'Player 2 won'
      }
  } else if(p1 == 'scissors'){
    if(p2 == 'paper'){
      return 'Player 1 won'
    } else if(p2 == 'scissors'){
      return 'Draw'
    } else{
      return 'Player 2 won'
    }
  } else{
    return 'Unknown'
  }
};
console.log(rps('paper', 'rock'))