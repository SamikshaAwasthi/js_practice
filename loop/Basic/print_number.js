// Print numbers from 1 to 100
// let n = 100;
// for (let i = 1; i <=n; i++) {
//  console.log(i);  
// }
// Print even numbers from 1 to 50
// let n = 50;
// for (let i = 1; i <=n; i++) {
//   if(i%2 ==0){
//     console.log(i);
    
//   }
// }
// Print odd numbers from 1 to 50
// let n = 50;
// for (let i = 1; i <=n; i++) {
//   if(i%2 !==0){
//     console.log(i);
    
//   }
// }

// Print multiplication table of a number

// let n = 5;
// // let t= 1;
// for (let i = 1; i <=10; i++) {
//     t =n*i;
//   console.log(` 5*${i} =${t}`);
  
// }

// Find sum of first N numbers
// let n = 10;
// let sum = 0
// for (let i = 1; i <=n; i++) {
//  sum =sum+i;
// }
// console.log(sum);

// Find factorial of a number
// let n=4;
// let f = 1;
// for (let i = 1; i<=n; i++) {
//  f = f*i

// }
// console.log(f);

// Count digits in a number
// let n = 1;
// let count = 0;
// while (n>=1) {
//     n%10
//     n=n/10;
//     count++;
// }

// console.log(count);
function reverseNumber(n){
    let reverse = 0;
    
    while (n>=1) {
       reminder = n % 10;
       
       reverse = (reverse*10) + reminder;
       n=Math.floor(n/10)
    }
    console.log(reverse);
    
}
reverseNumber(3456)




