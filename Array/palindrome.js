//using reverse method

function isPalidrome(num) {

  let rev = 0,
    num2 = num;

  while (num2) {
    rev = rev * 10 + (num2 % 10);
    num2 = Math.round(num2 / 10);
  }

  console.log(rev);
  return rev == num ? true : false;
  
}


//other way
// var isPalindrome = function(x) {
//     str = x+'';
//     let p1 = 0;
//     let p2= str.length-1;

//     while(p1<p2){
//         if(str[p1] != str[p2]){
//             return false;
//         }
//         p1++;
//         p2--;
//     }
//     return true;
// };
console.log(isPalidrome(11111));
