/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	
*/
function solve() {
	return function sum(args) {
		if (!Array.isArray(args)) {
		 	throw ("Error");
		}
		let arr = [].slice.call(args);	
		if (arr.length == 0) {
			return null;
		}
		arr = arr.map(x => Number(x));
		var sum = arr.reduce((a, b) => a + b, 0);
		if (isNaN(sum)) {
			throw "Error";
		}
		return sum;
	}
}
module.exports = solve;
//console.log(solve()([5,7]));