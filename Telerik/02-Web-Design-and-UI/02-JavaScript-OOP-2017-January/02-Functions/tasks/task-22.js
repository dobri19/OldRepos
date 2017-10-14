function solve() {
    return function findPrimes(...args) {
        // fastest prime
        let isPrime = function(num) {   
            if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) return false; 
            if (num == leastFactor(num)) return true;
            return false;
        }
        leastFactor = function(num) {
            if (isNaN(num) || !isFinite(num)) return NaN;  
            if (num == 0) return 0;  
            if (num % 1 || num * num < 2) return 1;
            if (num %2 == 0) return 2;  
            if (num % 3== 0) return 3;  
            if (num % 5== 0) return 5;  
            var m = Math.sqrt(num);
            for (var i = 7; i <= m; i += 30) {
            if (num % i == 0)      return i;
            if (num % (i+4) == 0)  return i+4;
            if (num % (i+6) == 0)  return i+6;
            if (num % (i+10) == 0) return i+10;
            if (num % (i+12) == 0) return i+12;
            if (num % (i+16) == 0) return i+16;
            if (num % (i+22) == 0) return i+22;
            if (num % (i+24 )== 0) return i+24;
            }
        return num;
        }

        let arr = [].slice.call(args);	
        let x = +arr[0];
        let y = +arr[1];
        if (arr.length !== 2) {
            throw "Error";
        }
        let result = [];
        for (let i = x; i <= y; i += 1) {
            if (isPrime(i)) {
                result.push(i);
            }
        }
        return result;
   }
}   
module.exports = solve;
        // function isPrime(num) {
        //     if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) return false; 
        //     if (num % 2 == 0) return (num == 2);
        //     if (num % 3 == 0) return (num == 3);
        //     var m = Math.sqrt(num);
        //         for (var i = 5; i <= m; i += 6) {
        //         if (num % i == 0)     return false;
        //         if (num % (i+2) == 0) return false;
        //         }
        //     return true;
        // }

        // function isPrime(num) {
        //     if (num == 0 || num == 1) {
        //         return false;
        //     }
        //     let prime = true;
        //     let divider = num - 1;
        //     while (divider > 1) {
        //         if (num % divider == 0) {
        //             return false;
        //         }
        //         divider -= 1;
        //     }
        //     return prime;
        // }
