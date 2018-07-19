var gimme = function (inputArray) {
    let copiedArr = inputArray.slice();
    let tempArr = copiedArr.sort(function(a, b){return a - b});
    let targetVal = tempArr[1];
    return inputArray.indexOf(targetVal);
};