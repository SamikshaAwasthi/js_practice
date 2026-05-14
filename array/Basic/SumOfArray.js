function SumOfArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum+arr[i]
    }
    return sum;
}

console.log(SumOfArray([10,43,24,3,2,4]));
