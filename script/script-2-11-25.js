// About attirbutes
myInput = document.querySelector('#input')
// mycheck = document.querySelector('#mycheck');
// myInput.addEventListener('click', ()=>{
//   if(myInput.id === 'input'){
//     myInput.setAttribute('id', 'yes')
//     console.log(myInput.id)
//   } else{
//     myInput.setAttribute('id', 'input')
//   }
// })
// for(att of myInput.attributes){
//   console.log(`${att.name}: ${att.value}`)
// }

// function css(e, style){
//   for(const property in style)
//     e.style[property] = style[property]
// }

// css(myInput, {
//    background: 'yellow',
//     border: 'solid 1px red'

//   });

// const  inputStyle = getComputedStyle(myInput)
// console.log( inputStyle.backgroundColor)
// myInput.className += 'hhh'
// myInput.classList.add('yes')

// console.log(myInput.className)

// const height = myInput.offsetWidth;
// console.log({height})
// const clickMe = document.querySelector('#click-me')
// const myLink = document.querySelector('.click-event a')
// function handleClick(e){
//   alert('hello my name is click me');
//   console.log(e.type)
// }

// clickMe.addEventListener('click', handleClick)

// myLink.addEventListener('click', (e)=>{
//   console.log('clicked')
//   e.preventDefault()
// })

// DMContentLoaded event

const loadBtn = document.querySelector('.loaded');
let btn = document.querySelector('#btn');

// disable context menu when right-mouse clicked


btn.addEventListener('mouseup', (e) => {
  let msg = document.querySelector('#message');
  switch (e.button) {
    case 0:
      msg.textContent = 'Left click'
      break;
    case 1:
      msg.textContent = 'Middle click'
      break;
    case 2:
      msg.textContent = 'Right click'
      break;
    default:
      msg.textContent = 'Unknown click'
  }


});