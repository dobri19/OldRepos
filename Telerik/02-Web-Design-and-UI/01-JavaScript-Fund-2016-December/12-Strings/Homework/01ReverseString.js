// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
function reverseString(args) {
    var newString = "";
    for (var i = args[0].length - 1; i >= 0; i--) {
        newString += args[0][i];
    }
    return newString;
}
var str = [ 'sample' ];
console.log(reverseString(str));