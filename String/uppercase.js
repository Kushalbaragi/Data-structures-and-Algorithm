function convertUpper(str){
    let newstr='';
    for(let i=0;i<str.length;i++){
        
        (str[i]>='A' && str[i]<='Z') ? (newstr= newstr+String.fromCharCode(str.charCodeAt(i)+32)):newstr+=str[i];
    }
    return newstr;
}

console.log(convertUpper('Kushal Baragi'));
