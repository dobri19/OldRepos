function isInTheCircle(args) {

    var coordX = args[0];
    var coordY = args[1];

    var circle1 = 0;
    var circle2 = 0;
    var radius = 2;

    var distance = Math.sqrt((coordX - 0)*(coordX - 0) + (coordY - 0)*(coordY - 0));
    var r = (2 - distance);

    if (r < 0) {
        return  "no " + distance.toFixed(2);
    }
    else {
        return  "yes " + distance.toFixed(2);
    }
}
console.log(isInTheCircle(['-2', '0']));