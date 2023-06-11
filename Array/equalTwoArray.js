function check(A,B,N){
    if(A.length !== B.length) return false
     A.sort((a,b)=>a-b);
     B.sort((a,b)=>a-b);
     
     A.forEach((a,index)=>{
         if(A[index] !== B[index]) return false
     })
     return true;
    
 }
 
 console.log(check([6,8,9,7,5,3,1],[5,4,2,5,1,7]));