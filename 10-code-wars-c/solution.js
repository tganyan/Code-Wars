function find_average(array) {
    // your code here
    let fullScores = array.reduce(function(total, item) {
        return total += item
    });
    return fullScores / array.length
}