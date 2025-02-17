// setTimeout 
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
start.addEventListener('click', () => {
  function myTimer() {
    console.log('hello')
  }

  setTimeout(myTimer, 3000);
  stop.addEventListener('click', () => {
    clearInterval(myTimer)
    console.log('stop')
  })
})


