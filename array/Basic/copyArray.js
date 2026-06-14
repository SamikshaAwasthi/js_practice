function copyArray(arr) {
    let copyarr =[]
    for (let i = 0; i < arr.length; i++) {
        copyarr.push(arr[i])
    }
    return copyarr
    
}
console.log(copyArray([1,2,3,4]));
