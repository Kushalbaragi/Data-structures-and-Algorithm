let arr=[-2,-1];
//find maximun sub array sum in the given array

function maximun_subArray(arr){
    let maxSum=-Infinity;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
         sum=sum+arr[j];
         if(maxSum<sum) maxSum=sum;
        }
    }
    return maxSum;
}

//this brute force method wont work for [-2.-1];
// console.log(maximun_subArray(arr));

//kadane's algorithm

// function maximun_subArray(arr){
//     let maxSum=-Infinity;
//     let currentSum=0;

//     for(let i=0;i<arr.length;i++){
//          currentSum+=arr[i];

//          if(maxSum<currentSum) maxSum=currentSum;
//          if(currentSum<0) currentSum=0;
        
//     }
//     return maxSum;
// }
console.log(maximun_subArray(arr));



