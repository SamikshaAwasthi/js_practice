// function MergeArray(arr1,arr2){
//     let arr =[];
//     for (let i = 0; i < arr1.length; i++) {
//        arr.push(arr1[i]) 
//     }
//     for (let j = 0; j < arr2.length; j++) {
//         arr.push(arr2[j])
//     }
//     return arr
   
// }
// console.log(MergeArray([1,2,3,4],[4,5,6,7,]));


// function MergeArray(arr1,arr2) {
//     let arr = [...arr1,...arr2]
//     return arr
    
// }

// console.log(MergeArray([1,2,3,4],[4,5,6,7,]));

function MergeArray(arr1,arr2) {

   let arr =  arr1.concat(arr2)

    return arr
}

console.log(MergeArray([1,2,3,4],[4,5,5,6,7,]));