let input=document.querySelector('.input-text')
let output=document.querySelector('.preview')
console.log(output.innerText)


input.addEventListener('input',(e)=>{
    output.innerText=e.data
})