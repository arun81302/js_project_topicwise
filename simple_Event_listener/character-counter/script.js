let textarea=document.querySelector('textarea')
let charcount=document.querySelector('.charcount')
let wordcount=document.querySelector('.wordcount')
let sentcount=document.querySelector('.sentcount')
let char=0
let word=0
let sent=0
textarea.addEventListener('input',(e)=>{
let text=textarea.value
let allcount=text.length
charcount.textContent=allcount
if(e.data==' '){
    word+=1
    wordcount.textContent=word
}
let sentence=text.match(/[.!?]/);
sentcount.textContent=sentence?sentence.length:0
})