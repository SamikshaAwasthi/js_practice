function CountOfEvenODDArrayElement(arr){
    let countEven =0;
    let countOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2 == 0){
            
             countEven++;
        }
        else{
            countOdd++;
        }
        
    }
    console.log("count of even",countEven,"count of odd:",countOdd);
}CountOfEvenODDArrayElement([10,43,24,3,2,4])