let arr = [1, 2, 3, 4];

//To find the min number
// let minValue=arr.reduce((min,ele)=>{
//  if(ele<min) min=ele;
//  return min;
// },arr[0]);

//To find the max number
// let max=arr.reduce((max,ele)=>{
//     if(ele>max) max=ele;
//     return max;
// })

//To find the total number
// let sum=arr.reduce((total,ele)=>{
//     return total+ele;
// },0);

let minMaxTotal = (arr) => {
  let min = arr[0];
  let max = 0;
    let sum = 0;
  arr.forEach((ele) => {
    if (ele < min) min = ele;
    if (ele > max) max = ele;
    sum += ele;
  });
  return [min,max,sum];
};

console.log(minMaxTotal([10,2,3,4,5,6]));
