function solve(args) {
    var number = +args[0];
    for(var i = number; i >= 2; i -= 1) {
        var prime = true;
        for(var j = 2; j <= (Math.sqrt(i) | 0); j += 1) {
            if(i % j === 0) {
                prime = false;
            }
        }
        if(prime) {
            return i;
        }
    }
}
// function solve(args) {
//     var n = +args[0];
//     // Eratosthenes algorithm to find all primes under n
//     var array = [], upperLimit = Math.sqrt(n), output = [];
//     // Make an array from 2 to (n - 1)
//     for (var i = 0; i <= n; i++) {
//         array.push(true);
//     }
//     // Remove multiples of primes starting from 2, 3, 5,...
//     for (var i = 2; i <= upperLimit; i++) {
//         if (array[i]) {
//             for (var j = i * i; j < n; j += i) {
//                 array[j] = false;
//             }
//         }
//     }
//     // All array[i] set to true are primes
//     for (var i = 2; i < n; i++) {
//         if(array[i]) {
//             output.push(i);
//         }
//     }
//     return output[output.length-1];
// }

// function solve(args) {
//     var numN = +args[0],
//         arr,
//         temp = +0;
//     arr = new Array(numN + 1);

//     for (let j = 3; j <= numN; j = j + 2) {
//         if (arr[j] === undefined) {
//             temp = j + j;

//             while (temp <= numN) {
//                 arr[temp] = 0;
//                 temp = temp + j;
//             }
//         }
//     }
//     for (var k = numN; k >= 2; k = k - 1) {
//         if (arr[k] === undefined && arr[k] % 2 !== 0) {
//             console.log(k);
//             break;
//         }
//     }
// }

//console.log(solve(['126']));