function isInTheCircleRectanlge(args) {

    var coordX = args[0];
    var coordY = args[1];

    var circle1 = 0;
    var circle2 = 0;
    var radius = 2;

    var distance = Math.sqrt((coordX - 1)*(coordX - 1) + (coordY - 1)*(coordY - 1));
    var r = (1.5 - distance);
    var d = false;
   // if ((coordX-1)*(coordX-(1+6)) <= 0 && (coordY + 1)*(coordY - (-1-2)) <= 0) {
    //    d = true;
    //}
      if (coordX >= -1 && coordX <= 5 && coordY <= 1 && coordY >= -1) {
        d = true;
    }

    if (r < 0 && d == false) {
        return  "outside circle outside rectangle";
    }
    else if (r >= 0 && d == true) {
        return  "inside circle inside rectangle";
    }
    else if (r < 0 && d == true) {
        return  "outside circle inside rectangle";
    }
    else if (r >= 0 && d == false) {
        return  "inside circle outside rectangle";
    }
}