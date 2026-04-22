// print febonacci series till N

//  function febonacci(n) {
//     let first = 0;
//     let second = 1;

    
//     for(let i =0;i<n;i++){
//         console.log(first);
        
//         let next = first+second;
//         first = second;
//         second= next;
//         // console.log(`febonacci series: ${next}`);
//     }
    
    
//  }
//  febonacci(10)

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