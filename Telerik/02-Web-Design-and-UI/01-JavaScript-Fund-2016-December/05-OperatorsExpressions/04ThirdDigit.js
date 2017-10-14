function thirdDigit(number){
    var result = (parseInt(number/100))%10;
    if (result ==7){
        return true
    }   
    else {
        return ("false " + result);
    }  
}
console.log(thirdDigit(1237655));