function secondLargest(arr) {
let max = -Infinity;
let secondLargest = -Infinity;

let i = 1;
for (let i = 0; i < arr.length; i++) {
    
    if(arr[i]>max){
        secondLargest = max;
        max=arr[i]
    }
    else if(arr[i]>secondLargest && arr[i]!=max){
        secondLargest=arr[i]
    }
}

 return secondLargest
}
console.log(secondLargest([3,4,10,6,8]));
