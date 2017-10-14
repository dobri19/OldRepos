function correctBrackets(args) {
    //var str = new String(args);
    var str = args[0];
    var brackets = 0;
    for (var ch in str) {
        if (str[ch] == '(') {
            brackets++;
        }
        else if (str[ch] == ')') {
            brackets--;
        }
        if (brackets < 0) {
            break;
        }
    }
    if (brackets == 0) {
       return "Correct";
    }
    else {
        return "Incorrect";
    }
}
var str = ['((a+b)/5-d)'];
console.log(correctBrackets(str));