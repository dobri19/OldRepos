/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/
function solve() {
	return function findPrimes() {
		let arr = [].slice.call(arguments);
		if (arr.length != 2) {
			throw "Error";
		}
		let x = +arr[0];
        let y = +arr[1];
		let result = [];
		for (let i = x; i <= y; i++) {
			if (isPrime(i)) {
				result.push(i);
			}
		}
		return result;
		function isPrime(num) {
			let prime = true;
			let divider = num - 1;
			while (divider > 1) {
				if (num % divider == 0) {
					return false;
				}
				divider -= 1;
			}
			if (num == 0 || num == 1) {
				return false;
			}
			return prime;
    	}
	}
}
module.exports = solve;