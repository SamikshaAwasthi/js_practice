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