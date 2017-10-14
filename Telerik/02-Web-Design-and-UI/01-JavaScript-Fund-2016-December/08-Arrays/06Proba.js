function mostFrequentNumber(args) {
    var arr = args.map(Number);
    var currentFreq = 1,
        largestFreq = 1,
        num = 0,
        mostPopularNum = 0,
        len = arr.length-1;
    arr.shift();
    arr.sort();
    for (var i = 0; i <= len - 1; i+=1) {
        if(arr[i] == arr[i+1]) {
            currentFreq++;
            if (largestFreq <= currentFreq) {
            largestFreq = currentFreq;
            mostPopularNum = arr[i];
            } 
        }
        else {
            currentFreq = 1;
        }
    }
    if (arr.length == 1) {
        console.log(arr[0] + ' (' + 1 + ' times)');
    }
    else{
         console.log(mostPopularNum + ' (' + largestFreq + ' times)');
    }
}
mostFrequentNumber(['2', '0', '7']);