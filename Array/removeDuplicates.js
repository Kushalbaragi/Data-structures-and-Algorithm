let arr=[1,2,2,2,2,3,4,5,2,2,3,3,4,1]


function removeDuplicates(arr){
    return new Set(arr)
}


let obj=removeDuplicates(arr);
//to convert set into array using forEach method
let NewArr=[];
obj.forEach(ele=>NewArr.push(ele));

//to convert set into array using Spread operator
console.log('spread',[...obj]);

//to convert set into array using Array.from method
let newArrFrom=Array.from(obj);
console.log(newArrFrom);


function removeDuplicates(arr){
     for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                for(let k=j;k<arr.length;k++){
                     arr[k]=arr[k+1]
                }
                arr.pop();
                --i;
            }
        }
     }
}

function removeDuplicates(arr){
    let removedDuplicates=[];
    arr.forEach(ele=>{
        if(!removedDuplicates.includes(ele)) removedDuplicates.push(ele);
    })
    return removedDuplicates;
}


console.log('looping',removeDuplicates(arr));



