function lastLarge(arr,rotate){
    for(let i=0;i<rotate;i++){
       arr.unshift(arr[arr.length-1]);
       arr.pop();
       console.log(arr);
    }
   
   }
   
   let arr=[1,2,3,4,5];
   lastLarge(arr,2)
   // console.log(arr);