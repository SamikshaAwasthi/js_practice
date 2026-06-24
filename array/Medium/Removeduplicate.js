let arr =[4,3,2,4,5,4,5,3,4,1]
let a=[]
// for (let i = 0; i < arr.length; i++) {
//     if(!a.includes(arr[i])){
//         a.push(arr[i])
//     }
// }
// console.log(a);

for (let i = 0; i < arr.length; i++) {
    let isduplicate = false;
    for (let j = 0; j < a.length; j++) {
        if(arr[i] === a[j]){
            isduplicate = true;
            break;
        }
    }
    if(!isduplicate){
        a.push(arr[i])
    }
}
console.log(a);
