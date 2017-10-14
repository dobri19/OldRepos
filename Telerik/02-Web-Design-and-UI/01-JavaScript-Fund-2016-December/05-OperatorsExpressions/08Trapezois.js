function trapezoidArea(args) {
    var a = parseFloat(args[0]);
    var b = parseFloat(args[1]);
    var h = parseFloat(args[2]);

    if((isNaN(a) || isNaN(b) || isNaN(h)) && (a < 0 || b < 0 || h < 0)) {
        return;
    }
    var x = (a+b)/2;
    var area = x * h;
    return area.toFixed(7);
}
console.log(trapezoidArea(['5', '7', '12']));