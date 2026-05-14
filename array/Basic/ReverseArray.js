// reverse of array
function ReverseOfArray(arr){
    let reverse =[];
    for (let i = arr.length-1; i>=0; i--) {
        reverse.push(arr[i])
    }
    return reverse
};
console.log(ReverseOfArray([10,43,24,24,3,2,4]));

