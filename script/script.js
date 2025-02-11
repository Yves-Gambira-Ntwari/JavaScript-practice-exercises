// const img1 = document.querySelector('#image1')
// const img2 = document.querySelector('#image2')
// const img3 = document.querySelector('#image3')

// const imgArray = [img1, img2, img3];
// let j = -1;

// j++;
// if(j < imgArray.length){  
//   for(let i = 0; i < imgArray.length; i++){
//     imgArray[i].style.display = 'none'
//       clickMe.addEventListener('click', ()=>{
//       if(i = j){
//         imgArray[j].style.display = 'block'
//       } else{

//         imgArray[i].style.display = 'none'
//       }
//     })
// }
//     console.log(j)
//     } else{
//       j=-1;
//     }
  
    

// // selector using id 
// const elem = document.getElementById('first')
// // console.log(elem)
// // select using name
// let gender = document.getElementsByName('rate')
// let btn = document.getElementById('btnRate');
// // console.log(gender)
// btn.addEventListener('click', () => {
//         gender.forEach((rate) => {
//             if (rate.checked) {
//                 output.innerText = `You selected: ${rate.value}`;
//             }
//         });

//     });
//     // Select using elementName
// const elementName = document.getElementsByTagName('h2')
// // console.log(elementName.length)
// // using querySelector
// const query = document.querySelector('*')
// // console.log(btn.parentNode)
// const parent = document.querySelector('.parent')

// let mydiv = document.createElement('div')
// mydiv.innerHTML = '<p>hello</p>'
// console.log(mydiv)
// parent.appendChild(mydiv)
// console.log(parent)
// const menu = document.querySelector('#menu')

// const createMenuList = (name)=>{
// let li = document.createElement('li')
// li.textContent = name;
// return li
// }
// menu.appendChild(createMenuList('Yes'))
// // console.log(menu.innerHTML)

// // append loop

// const parentLoop = document.querySelector('.appendLoop');
// let i = 1;
// while(i < 4){
// let p = document.createElement('p');
// if(i%2 === 0){
//   p.innerText = `The paragraph ${i}, and it is even paragraph`
// parentLoop.appendChild(p)
// } else{
// p.innerText = `The paragraph ${i}, and it is odd paragraph`
// parentLoop.appendChild(p)
// }
// i++
// }


// // use documentFragment
// let languages = ['JS', 'Python', 'TypeScript']
// let langEl = document.querySelector('#languages');
// // console.log(langEl)
// let fragment = new DocumentFragment()
// languages.forEach(language => {
// let li = document.createElement('li');
// li.innerHTML = language
// fragment.appendChild(li)
// // console.log(li)
// });
// langEl.appendChild(fragment)

// // console.log(menu)

// // console.log(parent.firstElementChild.textContent)
// // console.log(parent.firstElementChild)
// // console.log(parent.previousElementSibling)

// // let getSiblings = function (e) {
// //           // for collecting siblings
// //           let siblings = []; 
// //           // if no parent, return no sibling
// //           if(!e.parentNode) {
// //               return siblings;
// //           }
// //           // first child of the parent node
// //           let sibling  = e.parentNode.firstChild;
// //           // collecting siblings
// //           while (sibling) {
// //               if (sibling.nodeType === 1 && sibling !== e) {
// //                   siblings.push(sibling);
// //               }
// //               sibling = sibling.nextSibling;
// //           }
// //           return siblings;
// //       };
// //       let siblings = getSiblings(document.querySelector('.current'));
    
// //       siblingText = siblings.map(e => e.innerText);
// //       console.log(siblingText);

// // after method
// const h1 = document.querySelector('h1')
// const p = document.createElement('p')
// p.innerText = 'This is the paragraph that use after method'
// h1.after(p)

// // use afterr for greater than one node
// const list = document.querySelector(".after-method");
// const libs = ['ReactJs', 'Meteor', 'Polyme'];
// const items = libs.map((lib) =>{
// const item = document.createElement('li');
// item.innerText = lib;
// return item;
// })
// list.lastChild.after(...items)

// // use append method
// const appendList = document.querySelector('.append-method');
// let langs = ['TypeScript', 'HTML', 'CSS']
// let nodes = langs.map((lang) =>{
// const li = document.createElement('li')
// li.innerText = lang;
// return li
// })
// appendList.append(...nodes)
// use Adjacent Html

const Adjacent = document.querySelector('.Adjacent ul');
Adjacent.insertAdjacentHTML('beforebegin', '<h2>Web Technology</h2>');
Adjacent.insertAdjacentHTML('afterbegin', '<li>HTML</li>');
Adjacent.insertAdjacentHTML('beforeend', '<li>JavaScript</li>');
Adjacent.insertAdjacentHTML('afterend', '<p>For frontend developers</p>');

let cloneAdj = Adjacent.cloneNode(true);
document.body.append(cloneAdj)