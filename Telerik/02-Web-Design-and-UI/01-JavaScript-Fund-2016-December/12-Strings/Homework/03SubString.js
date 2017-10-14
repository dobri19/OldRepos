function subString(args) {
    var sub = args[0].toLowerCase(),
        str = args[1].toLowerCase(),
            count = 0;
    var index = str.indexOf(sub);
    while (index >= 0) {
        count += 1;
        index = str.indexOf(sub, index + 1);
    }
    return count;
}
var str = [
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
];
console.log(subString(str));