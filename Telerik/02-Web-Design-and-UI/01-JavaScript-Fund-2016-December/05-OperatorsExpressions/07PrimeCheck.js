function isPrime(number) {

    if (number < 2) {
        return "false";
    }
    var primeCheck = true;
    for(var i = 2; i <= Math.sqrt(number); i += 1) {
        if (number % i === 0) {
            primeCheck = false;
        }
    }
    if (primeCheck)
        return "true";
    else
        return "false";
}