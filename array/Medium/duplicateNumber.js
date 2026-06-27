function FindDuplicate(arr) {
    let result=[]
    for (let i = 0; i < arr.length; i++) {
        for (let j=i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                let ispresent = false;
                for (let k = 0; k < result.length; k++) {
                    if (result[k] == arr[i]) {
                        ispresent = true;
                        break;
                    }
                    
                }
                if(!ispresent){
                result.push(arr[i])
            }
        }
        }
        
        
    }
    return result;
}
console.log(FindDuplicate([1,2,3,2,4,1,5,2,5,3,5]));
