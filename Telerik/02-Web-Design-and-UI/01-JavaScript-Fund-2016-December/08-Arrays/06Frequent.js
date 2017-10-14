function mostFrequentNumber(args) {
    var arr = args.map(Number);
    var currentFreq = 0,
        largestFreq = 0,
        num = 0,
        mostPopularNum = 0,
        len = arr.length-1;
    arr.shift();
    arr.sort();
    for (var i = 0; i < len-1; i += 1) {
        if (num == arr[i] || i == 0) {
            num = arr[i];
            ++currentFreq;
        }
        if (currentFreq > largestFreq) {
            largestFreq = currentFreq;
            mostPopularNum = arr[i];
        }
        if (len - 1 > i && arr[i + 1] != num) {
            num = arr[i + 1];
            currentFreq = 0;
        }
    }
    if (arr.length == 1) {
        console.log(arr[0] + ' (' + 1 + ' times)');
    }
    else{
         console.log(mostPopularNum + ' (' + largestFreq + ' times)');
    }
}
mostFrequentNumber(['1', '0']);