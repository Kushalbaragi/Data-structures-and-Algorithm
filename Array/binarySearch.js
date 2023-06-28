let arr=[1,2,3,4,5];
let key=33;


function binarySearch(arr,target,start,end){

    if(start>end) return false;

    let middle=Math.floor(start+end/2);

    if(arr[middle]===target) return true;

    if(target<arr[middle]){
       return binarySearch(arr,target,start,middle-1)
    }
    else{
        return binarySearch(arr,target,middle+1,end)
    }
}


console.log(binarySearch(arr,key,0,arr.length-1));