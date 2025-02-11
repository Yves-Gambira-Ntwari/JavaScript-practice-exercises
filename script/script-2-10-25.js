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

// const Adjacent = document.querySelector('.Adjacent ul');
// Adjacent.insertAdjacentHTML('beforebegin', '<h2>Web Technology</h2>');
// Adjacent.insertAdjacentHTML('afterbegin', '<li>HTML</li>');
// Adjacent.insertAdjacentHTML('beforeend', '<li>JavaScript</li>');
// Adjacent.insertAdjacentHTML('afterend', '<p>For frontend developers</p>');

// let cloneAdj = Adjacent.cloneNode(true);
// document.body.append(cloneAdj)

