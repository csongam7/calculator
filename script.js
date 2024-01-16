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
        return;
    }
    if (character == "-" || "+" || "/" || "*"){
        display.innerText += character;
        return;
    }
    display.innerText = character;
}
