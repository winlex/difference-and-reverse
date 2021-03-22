function sumSquareDifference(n) {
    var sum1 = 0;
    var sum2 = 0;

    for(var i = 1; i <= n; i++) {
        sum1 += Math.pow(i, 2);
        sum2 += i;
    }
    sum2 = Math.pow(sum2, 2);

    return sum2 - sum1;
}

module.exports = sumSquareDifference;