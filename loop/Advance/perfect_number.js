// Check perfect number
function checkPerfectNumber(n) {
    let original =n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if(n%i === 0){
            sum = sum+i;
        }
    }
    if(sum == original){
        console.log("number is perfect");
        
    }
    else{
        console.log("number is not perfect");
        
    }
}
checkPerfectNumber(28)