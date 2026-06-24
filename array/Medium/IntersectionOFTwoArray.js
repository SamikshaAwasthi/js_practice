function IntersectionOfTwoArray(arr1,arr2) {
    let arr =[]
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]){
                arr.push(arr1[i])
            }
        }
        
    }
    return arr
}
console.log(IntersectionOfTwoArray([1,2,3,4,5],[3,4,5,6]));
