//? It is an alternative to if-else statement, usually more efficient than if-else

number1 = 13
number2 = 12

operator = '+'
result = null;
switch (operator) {
    case '-':
        if(number1 < number2) {
            result = number2 - number1
        } else {
            result = number1 - number2
        }
        break;
    case '+':
        result = number1 + number2
        break;
    default: 
        result = 0    
}
console.log(result);
