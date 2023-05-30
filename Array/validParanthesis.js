/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr=s.split('');
    let temp=[];

for(let i=0;i<arr.length;i++){
  
  if(arr[i]==='{' || arr[i]==='[' || arr[i] === '('){
      temp.push(arr[i]);
  }
  
   else if(arr[i]==='}' || arr[i]===']' || arr[i] === ')')
   {
     let k=temp[temp.length-1];
      if( (arr[i]===']' && k==='[')
        || (arr[i]==='}' && k==='{') 
        || (arr[i]===')' && k==='('))
      {
        temp.pop();
      }
     else{
       return false;
     }
  } 
  
  else{
    return false;
  }
}
if(temp.length===0){
    return true;
}
  else{
    return false;
  }
}

console.log(isValid("()[][]]]]"));
