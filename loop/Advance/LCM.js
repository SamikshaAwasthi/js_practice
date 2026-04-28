// print lcm

function lcm(a,b) {
    let max = Math.max(a,b)

    while (true) {
        if(max%a === 0 && max%b === 0){
            console.log("LCM",max);
            break;
        }
        max++;
    }
}

lcm(2,6)

