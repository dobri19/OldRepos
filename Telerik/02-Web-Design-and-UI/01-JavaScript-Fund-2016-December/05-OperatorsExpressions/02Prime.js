function isPrimenumber(number){
    if (number % 5 == 0 && number % 7 == 0) {
        return (`true ${number}`);
	}
	else
	{
		return (`false ${number}`);
	}
}
console.log(isPrimenumber(345));