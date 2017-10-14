function inc() {
    var arr = Array(+args);
    for (var i = 0; i<arr.length; i+=1) {
        arr[i] = i*5;
        console.log(arr[i]);
    }
}