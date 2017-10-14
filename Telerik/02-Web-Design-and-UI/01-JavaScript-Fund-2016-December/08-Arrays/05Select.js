function inc(args) {
    var args = args.map(Number);
    var arr = [];
    var min = 0;
    var temp = 0;
    for (var x = 0; x < args.length-1; x += 1){
        arr.push(args[x+1]);    
    }
    for (var i = 0; i < arr.length - 1; i += 1) {
        min = i;
        for (var j = i; j < arr.length; j += 1) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min == i){
            console.log(arr[i]);    
        }
        else {
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        console.log(arr[i]);
        }
    }
    console.log(arr[arr.length-1]);
}
inc(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']);

