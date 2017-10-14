function binary(args) {
    var first = args[0];
    //console.log(first);
    var last = args[args.length-1];
    //console.log(last);
    var arr = args.map(Number);
    arr.shift(); 
    //console.log(arr);
    arr.pop();
    arr.sort(function(a, b){return a - b});
    //console.log(arr);
    //arr = arr.sort();
    //console.log(arr);
    var len = arr.length;
    var iMax = len - 1,
        iMin = 0,
        iMid = len / 2,
        lastFound = false;
    while(iMax >= iMin) {
        iMid = ((iMin + iMax) / 2) | 0;
        if (arr[iMid] == last)
        {
            console.log(iMid);
            lastFound = true;
            break;
        }
        else if (arr[iMid] < last)
        {
            iMin = iMid + 1;
        }
        else
        {
            iMax = iMid - 1;
        }
    }

    if (!lastFound)
    {
        console.log("-1");
    }
}
//binary(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);
