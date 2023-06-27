// //to sort descending
// // arr.sort((a,b)=>a-b) //to sort ascending order
let arr='dcefab';
let newStr=arr;

//bubble sort techinque
for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            //  let temp=arr[j];
            // arr[j]=arr[j+1];
            // arr[j+1]=temp;
            let temp=arr[j];
            arr=arr.slice(0,j)+ +arr.slice(j+1,arr.length);
            arr=arr.slice(0,j+1)+temp+arr.slice(j+2,arr.length);
        }
    }
}

console.log(arr);

