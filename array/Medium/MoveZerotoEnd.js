function MoveZeroToEnd(arr) {
    let temp=0;
    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i] != arr[i+1]){
            temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
        }

    }
    return arr
}

console.log(MoveZeroToEnd([0,4,3,0,5,6,9,0]));
