let arr1 = [1,2,3,4,5]
let k = 2;
function rotateAraaybyKstep(arr , k) {
    let end = arr.length-1;
    reverseArray(arr,0,end);
    reverseArray(arr,0,k-1);
    reverseArray(arr,k,end);
}

function reverseArray(arr,start,end){
    
    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}


rotateAraaybyKstep(arr1,k);
// let end = arr1.length - 1; 
// reverseArray(arr1,0,end)
console.log(arr1)