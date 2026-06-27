function Union(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        arr.push(arr1[i])
    }
    for (let j = 0; j < arr2.length; j++) {
        let ispresent = false;
        for (let k = 0; k < arr.length; k++) {
            if (arr2[j] === arr[k]) {
                ispresent = true
                break;
            }

        }
        if (!ispresent) {
            arr.push(arr2[j])
        }
    }
    console.log(arr);

}
Union([1, 2, 3, 4], [3, 4, 5, 6])