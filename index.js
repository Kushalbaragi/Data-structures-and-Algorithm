let target=document.querySelectorAll('div');
function clickEvent(e){
    e.stopPropagation();
console.log(this.classList.value);
}

target.forEach(t=>t.addEventListener('click',clickEvent,{capture:true,once:true}))