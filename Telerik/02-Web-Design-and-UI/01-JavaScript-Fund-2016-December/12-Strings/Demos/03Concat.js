'use strict';

// var strings = [
//     'str1',
//     'str2',
//     'str3',
//     'str4',
//     'str5'
// ];
//let all = ''.concat(...strings); not working
// let all = ''.concat.apply('',strings);
//console.log(all);
// console.log(strings);
// console.log(strings.join(''));
function StringBuilder() {
            return {
                strs: [],
                len: 0,
                append: function (str) {
                    this.strs[this.len++] = str;
                    return this;
                },
                toString: function () {
                    return this.strs.join("");
                }
            };
        }
var s = "alabala"
var stringBuilder = new StringBuilder();
var result = stringBuilder.append(s).append(s).toString();
console.log(result);