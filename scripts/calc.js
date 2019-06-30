









fizzBuzz = function(num) {
    if (num % 3 === 0 && num % 5 === 0) { 
        return "FizzBuzz"; }
    else if (num % 3 === 0) { 
        return "Fizz"; }
    else if (num % 5 === 0) { 
        return "Buzz"; }
    else { 
        return num; }
};







/*
Calculator = function(){
    this.value = 0;
}

Calculator.prototype.add = function(number){
    if(type0f(number) == "number"){
        this.value += number;
    }else{
        alert("Error!");
    }
}




function addition(numOne, numTwo) {
    if (typeof(numOne) == "number" && typeof(numTwo) == "number") {
        return numOne + numTwo;
    }
    else {
        alert("Error!");
    }
}*/
