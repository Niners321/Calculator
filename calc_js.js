//setting up Global variables

const calculator = document.getElementById('container');
const keys = document.getElementById('keys');


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        //setting up variables
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        let displayedNum = display.textContent;
        let storedNum = calculator.dataset.storedNum;
        let secondNum;
        let previousKeyType = calculator.dataset.previousKeyType;
        let operator = calculator.dataset.operator;
        //adding numbers to display
        if(!action) {
            if (displayedNum === '0' || previousKeyType === 'operator'){
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKeyType = 'number';
        } //add decimal and ensure there is only one decimal
        else if (action == 'decimal') {
            if(!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if(previousKeyType === 'operator') {
                display.textContent = '0.';
            };  
            calculator.dataset.previousKeyType = 'decimal';
        } else if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide') {
                //assigning storedNum
                storedNum = display.textContent;
                calculator.dataset.storedNum = storedNum;
                key.classList.add('is-pressed');
                console.log(storedNum);
                //find the operator
                if (action === 'add') {
                    operator = '+';
                } else if (action === 'subtract') {
                    operator = '-';
                } else if (action === 'multiply') {
                    operator = '*';
                } else if (action === 'divide') {
                    operator = '/';
                 };
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = operator;

        } else if (action == 'clear') {
            display.textContent = '0';
            storedNum = '';
            operator = '';
            secondNum = '';
            calculator.dataset.previousKeyType = 'clear';
        } else if (action == 'equal') {
            secondNum = display.textContent;
            console.log(storedNum);
            console.log(operator);
            console.log(secondNum);
            display.textContent = operate(storedNum, operator, secondNum);
            console.log(operate(storedNum, operator, secondNum));
            console.log('Equal Key');
            calculator.dataset.previousKeyType = 'equal';
        }


    Array.from(key.parentNode.children)
        .forEach(k => key.classList.remove('is-pressed'));
    };

}
)

//add function
function add(a, b) {
    return parseFloat(a) + parseFloat(b);

};

//subtract function
function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
};

//multiplication function
function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
};

//division function
function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
};

//operate function
function operate(a, operator, b) {
    if(operator === "+") {
        return add(a, b);
    } else if(operator === "-") {
        return subtract(a, b);
    } else if(operator === "*") {
        return multiply(a, b);
    } else if(operator === "/") {
        return divide(a, b);
    } else {
        return null;
    };

};