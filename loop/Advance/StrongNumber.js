// Strong number check
function StrongNumber(n) {
   
    let sum =0;
    let original =n;
    while (n>0) {
        let rem = n%10;
        let f=1;
        for (let i = 1; i <= rem; i++) {
            f=f*i;
        }
        sum = sum+f;
        n=Math.floor(n/10)
    }
    if(sum === original){
        console.log("number is strong");
    }
    else{
        console.log("number is not strong");
    }
}
StrongNumber(40585
)