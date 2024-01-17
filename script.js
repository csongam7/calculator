let displayValue = [];
let operatorPreviously = false;
let defaultValue = true;

function setDisplayValueToDefault(){
    displayValue = [];
    defaultValue = true;
    console.log(displayValue);
}

function appendDisplayValue(value){
    displayValue.push(value);
}

function add(number1, number2){
    return parseFloat(number1 + number2);
}

function subtract(number1, number2){
    return parseFloat(number1 - number2);
}

function multiply(number1, number2){
    return parseFloat(number1 * number2);
}

function divide(number1, number2){
    return parseFloat(number1 / number2);
}

function operatorOfCalculations(operator, number1, number2){
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    switch (operator){
        case "+":
            return add(number1, number2);
        
        case "-":
            return subtract(number1, number2);
        
        case "*":
            return multiply(number1, number2);
        
        case "/":
            return divide(number1, number2);
        }
}

const buttons = document.querySelectorAll("button")
buttons.forEach(function(button){ button.addEventListener('click', function() {buttonClickHandler(button)})});

function buttonClickHandler(button){
    displayClickedButton(button.innerText);
}

function displayResult(result){
    const display = document.querySelector("#display");
    display.innerText = result;
}

function displayClickedButton(character){
    const display = document.querySelector("#display");
    if (character == "Clear"){
        display.innerText = "0"
        setDisplayValueToDefault();
        return;
    }

    else if(character == "="){
        appendDisplayValue(display.innerText)
        calculate();
    }

    else if (["-", "+", "*", "/"].includes(character)){
        appendDisplayValue(display.innerText);
        display.innerText += character;
        appendDisplayValue(character);
        operatorPreviously = true;
        return;
    }
    else if(operatorPreviously || defaultValue){
        display.innerText = character;
        operatorPreviously = false;
        defaultValue = false;
        return;
    }
    display.innerText += character;
}

function calculate(){
    const operators = [ "*", "/", "+", "-"];
    operators.forEach( (operator) => {
        if(displayValue.includes(operator)){
        const num1 = displayValue[displayValue.indexOf(operator) - 1]
        const num2 = displayValue[displayValue.indexOf(operator) + 1]
        const result = operatorOfCalculations(operator, num1, num2) 
        displayValue.splice(displayValue.indexOf(operator) - 1, 3, result);
    }
    })
}