'use strict';
// let y = "bobo";
// let str = "Hello!";
// let x = `hi, ${y}`;
// console.log(str);
// console.log(x);

// let str = 'Sample string';
// let strObj = new String('Sample string');
// console.log(str.length);
// console.log(strObj.length);

// function convertToNumber(str) {
//     return +str;
// }
// function convertToNumber(str) {
//     return parseInt(str);
// }
function convertToNumber(str) {
    return Number(str);
}
let str = '78';
let x = convertToNumber(str);
console.log(typeof str);
console.log(typeof x);
console.log(x);

