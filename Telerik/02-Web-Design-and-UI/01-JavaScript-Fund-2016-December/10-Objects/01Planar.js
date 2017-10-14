function planar(args) {
    //var arr = args.map(Number);
    var arr = [].slice.call(args)
    var result = [];
    for (var i = 0; i < 12; i+=4) {
        var dul = Math.sqrt( Math.abs(arr[0+i]-arr[2+i])*Math.abs(arr[0+i]-arr[2+i]) + 
                              Math.abs(arr[1+i]-arr[3+i])*Math.abs(arr[1+i]-arr[3+i])).toFixed(2);
                              console.log(dul);
                              dul = Number(dul);
                              result.push(dul);
    }
    result.sort();
    if (result[0]+result[1]>result[2] && result[0]+result[2]>result[1] 
    && result[1]+result[2]>result[0]){
        console.log("Triangle can be built");
    }
    else{
        console.log("Triangle can not be built");
    }
}
// planar([
//   '7', '7', '2', '2',
//   '5', '6', '2', '2',
//   '95', '-14.5', '0', '-0.123'
// ]);