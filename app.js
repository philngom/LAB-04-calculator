// import functions
import { add, subtract, multiply, divide, modulo } from './calculations.js';

const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const equalsButton = document.getElementById('equals-button');
const addAnswer = document.getElementById('add-answer');

const subtractNumber1 = document.getElementById('subtract-number-1');
const subtractNumber2 = document.getElementById('subtract-number-2');
const subtractEqualsButton = document.getElementById('subtract-equals-button');
const subtractAnswer = document.getElementById('subtract-answer');

const multiplyNumber1 = document.getElementById('multiply-number-1');
const multiplyNumber2 = document.getElementById('multiply-number-2');
const multiplyEqualsButton = document.getElementById('multiply-equals-button');
const multiplyAnswer = document.getElementById('multiply-answer');

const divideNumber1 = document.getElementById('divide-number-1');
const divideNumber2 = document.getElementById('divide-number-2');
const divideEqualsButton = document.getElementById('divide-equals-button');
const divideAnswer = document.getElementById('divide-answer');

const moduloNumber1 = document.getElementById('modulo-number-1');
const moduloNumber2 = document.getElementById('modulo-number-2');
const moduloEqualsButton = document.getElementById('modulo-equals-button');
const moduloAnswer = document.getElementById('modulo-answer');
// reference needed DOM elements


// set event listeners
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
equalsButton.addEventListener('click', () => {
    let num1 = Number(addNumber1.value);
    let num2 = Number(addNumber2.value);
    addAnswer.textContent = add(num1, num2);
});

subtractEqualsButton.addEventListener('click', () => {
    let num1 = Number(subtractNumber1.value);
    let num2 = Number(subtractNumber2.value);
    subtractAnswer.textContent = subtract(num1, num2);
});

multiplyEqualsButton.addEventListener('click', () => {
    let num1 = +multiplyNumber1.value;
    let num2 = +multiplyNumber2.value;
    multiplyAnswer.textContent = multiply(num1, num2);
});

divideEqualsButton.addEventListener('click', () => {
    let num1 = +divideNumber1.value;
    let num2 = +divideNumber2.value;
    divideAnswer.textContent = divide(num1, num2);
});

moduloEqualsButton.addEventListener('click', () => {
    let num1 = +moduloNumber1.value;
    let num2 = +moduloNumber2.value;
    moduloAnswer.textContent = modulo(num1, num2);
});

