function FrequencyElement(arr,target) {
    let count =0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == target){
            count++
        }
    }
    return count
}
console.log(FrequencyElement([5,8,5,2,5,1],3));
