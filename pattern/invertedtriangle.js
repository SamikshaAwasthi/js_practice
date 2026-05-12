// Print inverted right triangle

let n=5;

for (let row = 1; row <=n; row++) {
    let str ="";
    for (let col =row; col<=n ; col++) {
        str = str+ "* "
    }
    console.log(str);   
}