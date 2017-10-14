/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	
*/
function solve() {
    return function sum() {
        if (!Array.isArray(...arguments)) {
		 	throw "Error";
		}
        var sum = 0;
        var arr = [].slice.call(...arguments);
        if (arr.length == 0) {
            return null
        }
        for (let i = 0; i < arr.length; i++) {
        	arr[i] = +arr[i];
            if (isNaN(arr[i])) {
                throw "Error";    
            }
            else {
                sum += arr[i];
            }
		}
        return sum;
    }
}
module.exports = solve;
//console.log(solve()(["7","John"]));