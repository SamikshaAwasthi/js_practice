function MinOFArray(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<min){
            min=arr[i]
        }
        
    }
    return min
}

console.log(MinOFArray([10,43,24,24,3,2,4]));
