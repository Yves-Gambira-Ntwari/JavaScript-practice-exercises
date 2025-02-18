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
const load = document.getElementById('load')
click.addEventListener('click', ()=>{
  let id;
  let pos = 0;
  clearInterval(id)
  id = setInterval(frame, 10)
  function frame(){
    if(pos == 30){
      clearInterval(id)
    } else{
      pos++

    }
    load.style.top = pos + '%'
    load.style.left = pos + '%'
  }
})

