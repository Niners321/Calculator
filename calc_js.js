//setting up Global variables

const calculator = document.getElementById('container');
const keys = document.getElementById('keys');

keys.addEventListener('click', e => {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent
    if(!action) {
        if (displayedNum === '0'){
            display.textContent = keyContent;
        } else {
            display.textContent = displayedNum + keyContent;
        }
    } else if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide') {
            console.log("Operator Key!");
    } else if ( action == 'decimal') {
        display.textContent = displayedNum + '.';
    } else if (action == 'clear') {
        console.log('Clear Key');
    } else if (action == 'equal') {
        console.log('Equal Key');
    }
});

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



/*
function setScreen(displayNum) {
    displayNum = displayNum.toString();
    if (displayNum.length > 9) {
        displayNum = parseFloat(displayNum);
        displayNum = displayNum.toExpontential(2);
    }
    display.textContent = displayNum;
};

function addToScreen(num) {
    let displayNum = display.textContext;
    if(newInput) {
        newInput = false;
        setScreen(numb);
    } else if (displayNum == 0){
        setScreen(num);
    } else {
        if (displayNum.includes('e')) {
            displayNum = Number(displayNum);
        }
        displayNum = displayNum + numberStored;
        setScreen(displayNum);
    }
};

*/













