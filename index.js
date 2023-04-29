let firstNumber;
let operator;
let secondNumber;
let tempNumber;

function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate (operator, a, b) {
    return operator(a, b);

};

const bottomScreen = document.querySelector('#bottom-screen');
const upperScreen = document.querySelector('#upper-screen');
const numbers = document.querySelectorAll('.number');

const result = document.querySelector('.equal');
const clearBtn = document.querySelector('#clear');
const operands = document.querySelectorAll('.operand');

const numberClicked = numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        tempNumber = e.target.textContent;
        bottomScreen.innerHTML += tempNumber;
        console.log(typeof(tempNumber))
    })
})

const operandClicked = operands.forEach((operand) => {
    operand.addEventListener('click', (e) => {
        firstNumber = bottomScreen.innerHTML;
        upperScreen.innerHTML = firstNumber + " " + e.target.innerHTML;
        bottomScreen.innerHTML = "";
        operator = e.target.innerHTML;
        console.log(operator)
    })
})

const equalResult = result.addEventListener('click', () => {
    switch (operator){
        case '÷':
            return bottomScreen.innerHTML = divide(parseInt(firstNumber), parseInt(bottomScreen.innerHTML));
        case '×':
            return bottomScreen.innerHTML = multiply(parseInt(firstNumber), parseInt(bottomScreen.innerHTML));
        case '−':
            return bottomScreen.innerHTML = substract(parseInt(firstNumber), parseInt(bottomScreen.innerHTML));
        case '+':
            return bottomScreen.innerHTML = add(parseInt(firstNumber), parseInt(bottomScreen.innerHTML));
    };
})


const clearScreen = clearBtn.addEventListener('click', () => {
    bottomScreen.innerHTML = "";
    upperScreen.innerHTML = "";
})