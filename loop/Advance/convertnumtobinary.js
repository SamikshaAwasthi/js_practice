// Convert number to binary
let n = 23;
function toBinary(n){
    let binary="";
    while(n>0){
       let rem = n%2;
       binary = rem+binary;
       n= Math.floor(n/2);
    }
    console.log(binary);
    
}
toBinary(5)
