let str = "abcdefg";

//using one line

// let revStr=(str.split('').reverse().join(''));
// console.log(revStr);

function revStr(str) {
  let revstring = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstring += str[i];
  }
  return revstring;
}

console.log(revStr(str))
