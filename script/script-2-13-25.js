// Using key-events
const myInput = document.querySelector('.keyboard-event input')
const myp = document.querySelector('.keyboard-event p')
const mybtn = document.querySelector('.keyboard-event button')
myInput.addEventListener('keydown', (event) => {
  if (event.key === 'CapsLock') {
    console.log(`key=${event.key},code=${event.code}`);
  }
})
  myInput.addEventListener('input', () => {
    myInput.value = myInput.value.toUpperCase();
  })
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybtn.style.color = "red";
    } else {
      mybtn.style.color = "black";
    }
  }

  myInput.addEventListener('focus', ()=>{
    myInput.style.backgroundColor = 'red'
  })

  myInput.addEventListener('blur', ()=>{
    myInput.style.backgroundColor = ''
  })

  window.addEventListener('hashchange', ()=>{
    console.log(`changed ${location.hash}`)
    if(location.hash === 'home'){
      console.log('home')
    } else{
      console.log('about')
    }
  })

  const menu = document.getElementById('menu');
  menu.addEventListener('click', (e)=>{
    let target = e.target;
    switch(target.id){
      case 'home':
        console.log('Home clicked')
        break;
        case 'dashboard':
          console.log('Dashboard clicked')
          break;
        case 'report':
          console.log('Report has clicked')
          break;
        default:
          console.log('Unknown click')
    }
  })