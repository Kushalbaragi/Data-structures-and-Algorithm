document.cookie='name=kushal'
document.cookie='logged=true'
console.log(document.cookie);

let str=document.cookie;
let arr=str.split(';');
console.log(arr);
