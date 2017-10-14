function isOdd(x) {

    if (isNaN(x)){
        result.value = "NaN";
        return;
    }
    if(x % 2 !== 0) {
        return "odd " + x;
    }
    else if (x % 2 === 0) {
        return "even " + x;
    }
}
function oddOrEven(number) {
	if (number % 2 == 0) {
		console.log("even " + number);
	} else {
		console.log("odd " + number);
	}
}
console.log(isOdd(5));
oddOrEven(1231234);
console.log(isEven(35252));