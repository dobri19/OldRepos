function inc(args) {
    var count = +args[0],
        max = 1,
        currentMax = 1;
    for (var i = 1; i <= count - 1; i+=1) {
        if(args[i] == args[i+1]) {
            currentMax++;
        } 
        else {
            if (max <= currentMax) {
                max = currentMax;
            }
            currentMax = 1;
        }
    }
    if (max <= currentMax) {
        max = currentMax;
    }
    return max;
}
console.log(inc(['1', '6']));