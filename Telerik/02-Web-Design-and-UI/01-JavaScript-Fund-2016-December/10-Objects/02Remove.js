// function remove(args) {
//     var rem = args[0];
//     var arr = [].slice.call(args);
//     for (var i = 0; i < arr.length; i +=1) {
//         if (arr[i] == rem) {
//             arr.splice(i,1);
//         }
//     }
//     arr.forEach(function(element) {
//         console.log(element);
//     }, this);
// }
//remove([ '1', '2', '3', '2', '1', '2', '3', '2' ]);

function removeElements(args) {
    var rem = args[0];
    //var args = [].slice.call(args);
    args.remove(rem);
    console.log(args.join('\n'));
}
Array.prototype.remove = function(element) {
    var arr = this;
    //var arr = [].slice.call(args);
    for (var i = 0; i < arr.length; i +=1) {
        if (arr[i] == element) {
            arr.splice(i,1);
            i--;
        }
    }
}
// removeElements([
//   '_h/_',
//   '^54F#',
//   'V',
//   '^54F#',
//   'Z285',
//   'kv?tc`',
//   '^54F#',
//   '_h/_',
//   'Z285',
//   '_h/_',
//   'kv?tc`',
//   'Z285',
//   '^54F#',
//   'Z285',
//   'Z285',
//   '_h/_',
//   '^54F#',
//   'kv?tc`',
//   'kv?tc`',
//   'Z285'
// ]);