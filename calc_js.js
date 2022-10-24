//setting up Global variables

const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

let numberStored = "";
let operatorStored= "";


//add function
function add(a, b) {
    return a + b;
};

//subtract function
function subtract(a, b) {
    return a - b;
};

//multiplication function
function multiply(a, b) {
    return a * b;
};

//division function
function divide(a, b) {
    return a / b;
};

//operate function
const operate = function(a, operator, b) {
    if(operator === "+") {
        return add(a, b);
    } else if(operator === "-") {
        return subtract(a, b);
    } else if(operator === "x") {
        return multiply(a, b);
    } else if(operator === "÷") {
        return divide(a, b);
    } else {
        return null;
    };

};

function addToDisplay(num) {
    let displayNum = display.textContent;
}
