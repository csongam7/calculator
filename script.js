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
    console.log(displayValue);
}

function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1 / number2;
}

function operator(operator, number1, number2){
    switch (operator){
        case "add":
            return add(number1, number2);
        
        case "subtract":
            return subtract(number1, number2);
        
        case "multiply":
            return multiply(number1, number2);
        
        case "divide":
            return divide(number1, number2);
        }
}

const buttons = document.querySelectorAll("button")
buttons.forEach(function(button){ button.addEventListener('click', function() {buttonClickHandler(button)})});

function buttonClickHandler(button){
    displayClickedButton(button.innerText);
}

function displayClickedButton(character){
    const display = document.querySelector("#display");
    if (character == "Clear"){
        display.innerText = "0"
        setDisplayValueToDefault();
        return;
    }

    else if(character == "="){
        operator();
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