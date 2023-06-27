function removeVowels(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
      )
    ) {
      newStr += String.fromCharCode(str.codePointAt(i)-32);
    }
    else{
        newStr+=str[i];
    }
  }
  return newStr;
}

let str='kushal baragi';

console.log(removeVowels(str));
console.log(String.fromCharCode('a'-32));
