function rectangleArea(args){
    var area =  (args[0]*args[1]).toFixed(2);
    var peri = (args[0]*2+args[1]*2).toFixed(2);
    return (`${area} ${peri}`);
}
console.log(rectangleArea(2.5,3));


