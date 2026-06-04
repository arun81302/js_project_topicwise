let value=document.querySelector('.countervalue')
let add=document.querySelector('.addvaluesign')
let sub=document.querySelector('.subvaluesignn')
let reset=document.querySelector('.Resetbtn')
let count=0
const addvalue=()=>{
    count+=1
    value.textContent=count
}
const minvalue=()=>{
   
    if(count<=0){
        count=0
    }
    else{
        count-=1
    }
    value.textContent=count
}
const resetvalue=()=>{
    count=0
    value.textContent=count
}
add.addEventListener('click',addvalue)
sub.addEventListener('click',minvalue)
reset.addEventListener('click',resetvalue)
