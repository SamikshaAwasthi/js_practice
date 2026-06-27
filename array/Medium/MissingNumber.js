function FindMissingNumber(arr,n) {
    let found = false
    for (let i = 1; i <=n; i++) {
          found= false;
        for (let j = 0; j < arr.length; j++) {
          
            if(i == arr[j]){
                found = true
                break;
            }
        }
        
       if(!found){
        return i ;
       }
    }
    
    return "No Missing Number";
    
}
console.log(FindMissingNumber([1,2,3,4,5],5));
