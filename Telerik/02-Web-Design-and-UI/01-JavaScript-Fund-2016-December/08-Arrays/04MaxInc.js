function inc(args) {
    var args = args.map(Number);
    var count = args[0],
        max = 0,
        currentMax = 1;
    for (var i = 1; i <= count - 1; i+=1) {
        if(args[i] < args[i+1]) {
            currentMax++;
            if (max <= currentMax) {
            max = currentMax;
            } 
        }
        else {
            currentMax = 1;
        }
    }
    return max;
}
console.log(inc(['3', '5', '3', '4']));