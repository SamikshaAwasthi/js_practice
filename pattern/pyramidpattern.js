//  Print pyramid pattern
/*
      *
    * * *
  * * * * *
* * * * * * *
*/

let n=5;
// for (let row = 0; row <n; row++) {
        
//         let str=""
//     for (let col = 0; col <=(2*n)+1; col++) {
//         if(col >=n-row-1 && col<=n+row-1){
//             str = str+"*"
//         }
//         else{
//             str = str+" ";
//         }
    
//     }
//     console.log(str);
    
    
// }


for (let row = 0; row < n; row++) {

    let str = "";

    // spaces
    for (let space = 0; space < n - row - 1; space++) {
        str = str + " ";
    }

    // stars
    for (let col = 0; col <= row; col++) {
        str = str + "* ";
    }

    console.log(str);
}