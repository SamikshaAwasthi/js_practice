// print febonacci series till N

 function febonacci(n) {
    let first = 0;
    let second = 1;

    
    for(let i =0;i<n;i++){
        console.log(first);
        
        let next = first+second;
        first = second;
        second= next;
        // console.log(`febonacci series: ${next}`);
    }
    
    
 }
 febonacci(10)

// Find Largest  digit in a number
function largestDigit(n) {
    let max = 0;
    while (n>0) {
        let reminder = n%10;
        if(reminder >max){
            max = reminder;
        }
        n=Math.floor(n/10);
    }
    
    console.log(max);
    
}
largestDigit(34632638467);

//Find smallest digit
function smallestDigit(n){
    if(n === 0){
        console.log(0);
        return;
    }
    let min =9

    while (n>0) {
        let reminder = n%10;
        if(reminder < min){
            min = reminder;
        }
        n=Math.floor(n/10);
    }
    console.log(min);
    
}
smallestDigit(0)

// Check Armstrong number

function checkAramstrong(n){
    let original =n;
    let count =0;
    let total =0;

    while (n > 0) {
        count++;
        n=Math.floor(n/10)
    }

    n=original;
    while(n > 0){
         let rem = n%10;
        total += Math.pow(rem,count)
        n=Math.floor(n/10)
    }
    if(original === total){
        console.log("number is aramstrong");
        
    }
    else{
        console.log("number is not aramstrong");
        
    }
}
checkAramstrong(153)

//count frequency of digit
function CountFrequecyOfDigit(n,d) {
    let count = 0
    while(n>0){
        rem=n%10
        if( rem== d){
            count++;
        }
        n=Math.floor(n/10);
    }
    console.log(count);
    
}
CountFrequecyOfDigit(432,2)

//Sum of even & odd digits separately

function sumofdigit(n) {
    let sumofodd = 0;
    let sumofeven =0;
    while(n>0){
        rem = n%10;
        if(rem%2 == 0){
           sumofeven+=rem; 
        }else{
            sumofodd +=rem
        }
        n = Math.floor(n/10)
    }
    console.log(sumofodd,sumofeven);
    
}
sumofdigit(234231)

// print all divisor of a number
function divisor(n) {
    for (let i = 1; i <=n; i++) {
        if( n%i == 0){
            console.log(i);
        }
    }

}
divisor(10)

// check prime number

function checkprime(n) {
    if(n<=1){
        console.log("number is not prime");
        return;
    }
    for (let i = 2; i <=n-1; i++) {
        if(n%i == 0){
            console.log("number is not prime");
            return;
        }
        
    }
    console.log("number is prime");
    
}
checkprime(3)

//print prime number 1-100

function printprime(n) {
    for (let i = 1; i <=n; i++) {
        if(i<=1) continue;

         let isprime = true;

         for (let j = 2; j <=i/2; j++) {
            if (i%j == 0) {
                isprime=false;
                break;
            }
            
         }
         if (isprime) {
            console.log(i);
            
         }
        
    }
}
printprime(5)

// GCD of Two number
function gcd(a,b){
    let min = Math.min(a,b)
    let result =1;

    for (let i = 1; i <= min; i++) {
        if (a%i === 0 && b%i === 0) {
            result =i;
        }
        
    }
    console.log(result);
    
}gcd(12,18)