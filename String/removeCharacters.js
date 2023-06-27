// let str="0p";
let str='A man, a plan, a canal: Panama';

function remove(str){
str=str.toLowerCase();
let newstr='';

for(let i=0;i<str.length;i++){
    if((str[i]>='a'&& str[i]<='z') || (str[i]>='0'&& str[i]<='9') ){
        newstr+=str[i];
    }
}
console.log(newstr);
if(newstr===newstr.split('').reverse().join(''))
return true;
else return false;
}
console.log(remove(str));