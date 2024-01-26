let displayValue = [];
let operatorPreviously = false;
let justCalculated = false;
//let defaultValue = true;

function setDisplayValueToDefault(){
    displayValue = [];
    //defaultValue = true;
}

function isOperator(character){
    return ["-", "+", "*", "/"].includes(character);
}

function appendDisplayValue(value){
    if (displayValue.length == 1 && !isOperator(value)){
        setDisplayValueToDefault();
        if (value == "="){
            setDisplayValueToDefault();
            return;
        }
        display.innerText = value;
    }
    if (displayValue.length == 3){
        const result = operatorOfCalculations(displayValue[1], displayValue[0], displayValue[2])
        display.innerText = result;
        displayValue.splice(0, 3, result);
        justCalculated = true
        if (isOperator(value)){
            displayValue.push(value);
            display.innerText += value;
        }
        return
    }
    if (value != "="){
        displayValue.push(value);
    }
    
    
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

//make the clicked button appear on the calculator's display

function displayClickedButton(character){
    const display = document.querySelector("#display");

    /*switch(character){

        case "Clear":
            display.innerText = "0"
            setDisplayValueToDefault();
            return;

        case "=":
            appendDisplayValue(display.innerText);
            appendDisplayValue(character);

        case isOperator(character):
            appendDisplayValue(display.innerText);
            display.innerText += character;
            appendDisplayValue(character);
            operatorPreviously = true;
            return;
        }

    if ( operatorPreviously || justCalculated || isDefaultValueOnDisplay() ){
        display.innerText = character;
        operatorPreviously = false;
        justCalculated = false;
        //defaultValue = false;
        return;
    }
    else if( character != "="){
        checkIfOperatorCharacterMissingBetweenNumbers(character)
        display.innerText += character;
    }
}*/
    
    if (character == "Clear"){
        display.innerText = "0"
        setDisplayValueToDefault();
        return;
    }

    else if (character == "+/-"){
        toggleNumberToMinus();
    }

    else if(character == "="){
        appendDisplayValue(display.innerText);
        appendDisplayValue(character);
    }

    else if (isOperator(character)){
        //if (checkIfOperatorAlreadyPressed){}
        appendDisplayValue(display.innerText);
        display.innerText += character;
        appendDisplayValue(character);
        operatorPreviously = true;
        return;
    }
    else if(operatorPreviously || justCalculated || isDefaultValueOnDisplay()) {
        display.innerText = character;
        operatorPreviously = false;
        justCalculated = false;
        //defaultValue = false;
        return;
    }
    if (character != "=" && character != "+/-"){
        checkIfOperatorCharacterMissingBetweenNumbers(character)
        display.innerText += character;}
    
}


function isDefaultValueOnDisplay(){
    return display.innerText == "0";
}

function checkIfOperatorCharacterMissingBetweenNumbers(character){
    if( displayValue.length == 1 && !isOperator(character)){
        setDisplayValueToDefault();
        return true;
    }
    return false;
}

function toggleNumberToMinus(){
    if(isOperator(displayValue[displayValue.length - 1])){
        display.innerText = String(parseFloat(display.innerText) * -1) + displayValue[displayValue.length - 1];
        displayValue[0] = String(parseFloat(displayValue[0] * -1));
        return;
    }
    display.innerText = String(parseFloat(display.innerText) * -1);
}
//this is a much more complicated calculate function than the needed one :DD 
//I just did not understand the exercise for the first read

/* 
function calculate(){
    const operators = [ "*", "/", "+", "-"];
    operators.forEach( (operator) => {
        if(displayValue.includes(operator)){
        const num1 = displayValue[displayValue.indexOf(operator) - 1]
        const num2 = displayValue[displayValue.indexOf(operator) + 1]
        const result = operatorOfCalculations(operator, num1, num2) 
        displayValue.splice(displayValue.indexOf(operator) - 1, 3, result);
        if(displayValue.length == 1){
            displayResult(result)}
    }
    })
}*/