var number1 = parseInt( prompt("Enter first value"));


var number2 = parseInt( prompt("Enter second value"));


var operator = prompt("Enter oprator");

if (operator == "+"){
   var number3 = number1+number2
   
}
else if(operator == "-"){
    var number3 = number1-number2
    
}

else if (operator == "*"){
    var number3 = number1*number2
    
}
    
 else if (operator == "/"){
    var number3 = number1/number2
    
};

document.write(`Your Result is ${number3}<br>`);



if(number3 % 2 == 0){


document.write("Your Result is Even")

}

else{document.write("Your Result is odd");}