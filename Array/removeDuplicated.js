//Remove dupplicated from an array

let arr=[1,2,3,2,4,2,2,2,3,5,4];

//Using set method;
//let newarr=new Set(arr);



//simple for method
// let newarr=[...arr];
// for(let i=0;i<newarr.length;i++){
//     for(j=i+1;j<newarr.length;j++){
//         if(newarr[i]===newarr[j]){
//             for(let k=j;k<newarr.length;k++){
//                 newarr[k]=newarr[k+1];
//             }
//             newarr.pop();//to remove last element which moved to left
//             i--; //if number repeats in continuos
//         }
//     }
// }




//using includes
// function removeDuplicates(arr){
//      let removedArr=[];
//      arr.forEach((ele,index)=>{
//         if(!removedArr.includes(ele)){
//             removedArr.push(ele);
//         }
//      })
//      return removedArr;
// }


//using filter
//index of return -1 if not found
// function removeDuplicates(arr) {
//     return arr.filter((item,
//         index) => arr.indexOf(item) === index);
// }


//using reduce method
// function removeDuplicates(arr) {
//     let unique = arr.reduce(function (acc, curr) {
//         if (!acc.includes(curr))
//             acc.push(curr);
//         return acc;
//     }, []);
//     return unique;
// }


//indexof method
// function removeDuplicates(arr) {
//     let unique = [];
//     for (i = 0; i < arr.length; i++) {
//         if (unique.indexOf(arr[i]) === -1) {
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }

console.log(removeDuplicates([1,4,3,4,3,4,2,5,6,6,6,3,3,3,3]));