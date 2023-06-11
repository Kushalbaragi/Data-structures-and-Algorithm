function reverseInGroups(arr, n, k) {
  for (let i = 0; i < n; i += k) {
    let slicedsrr = arr.slice(i, i + k);
    slicedsrr.reverse();
    arr.splice(i, k, ...slicedsrr);
  }
}

console.log(reverseInGroups(1,2,3,4,5),5,3);
