let str='kushal sadashiv Baragi';

function reverseWord(str){
    let arr=str.split(' ');
    for(let i=0;i<arr.length;i++){

        arr[i]=arr[i].split('').reverse().join('');
    }

    return arr.join(' ');
}

console.log(reverseWord(str));