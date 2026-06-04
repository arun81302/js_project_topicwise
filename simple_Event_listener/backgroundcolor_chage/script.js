let body=document.querySelector('body')
// let colorlist=document.querySelectorAll('li')
// console.log(colorlist);
// colorlist.addEventListener('click',(e)=>{
//     console.log(e)
// })
let ul=document.querySelector('.colorslist')
ul.addEventListener('click',(e)=>{
    body.style.backgroundColor=e.target.id
})