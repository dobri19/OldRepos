function onBit(args) {			
	var x = 3;
    var mask = 1 << x;
    var result = args & mask;
    var bit = result >> x;
    return bit;    	
}	