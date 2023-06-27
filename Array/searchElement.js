function searchElement(arr,value){

    for(let i=0;i<arr.length;i++){
        if(arr[i]===value){
            return true;
        }
    }
    return false;
}

let arr=[1,2,3,4,5,6];
let value=1;
console.log(searchElement(arr,value)?'found':'notfound');