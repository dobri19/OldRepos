function lex(arg) {
    var first = arg[0];
    var second = arg[1];
    var length;
    if (first.length <= second.length){
        length = first.length;
    }
    else if (first.length > second.length){
        length = second.length;
    }
    for (var i = 0; i < length; i++) {
        if (first[i] < second[i]) {
            return "<";
        } 
        else if (first[i] > second[i]) {
            return ">";    
        }   
    }
    if (i < first.length && i == second.length) {
        return ">";        
    }
    else if (i < second.length && i == first.length) {
        return "<";        
    } 
    else {
        return "=";
    }
}
console.log(lex(['kvo', 'k']));