// setTimeout 
// const start = document.querySelector('#start');
// const stop = document.querySelector('#stop');
// start.addEventListener('click', startTimer)
// let intaval;
// function startTimer(){
//   intaval = setInterval(alert, 1000)
//   const output = 'yes';
// }

// function alert(){
//   console.log('hello')
// }

// stop.addEventListener('click', stopTimer)

// function stopTimer(){
//   clearInterval(intaval)
//   intaval = null;
// }

// animatio
// let timeLeft = 10; // Set countdown time

let secondLeft = 60;
let hour  = 1
let minuts = 1;

let countdown = setInterval(() => {
  secondLeft--
  if(secondLeft == 0){
    minuts--
    secondLeft = 60;
  }
  if(minuts == 0){
    hour--
    clearInterval(countdown)
  }
  console.log(`${hour}:${minuts}:${secondLeft}`)

}, 1000); 