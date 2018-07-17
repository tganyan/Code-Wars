function isNice(arr){
    let matchFound = true;

    if (!arr.length || !arr) {
        matchFound = false;
    }

    for (let arrIndex in arr) {
        if (!(arr.includes(arr[arrIndex] + 1) | arr.includes(arr[arrIndex] - 1))) {
        matchFound = false;
        }
    }
    return matchFound;
}