// import functions
import { add, subtract, multiply, divide, modulo, integerDivision, pythagoras } from './calculations.js';

// reference needed DOM elements

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

const intDivNumber1 = document.getElementById('int-div-number-1');
const intDivNumber2 = document.getElementById('int-div-number-2');
const intDivEqualsButton = document.getElementById('int-div-equals-button');
const intDivAnswer = document.getElementById('int-div-answer');

const pythagorasNumber1 = document.getElementById('pythagoras-number-1');
const pythagorasNumber2 = document.getElementById('pythagoras-number-2');
const pythagorasEqualsButton = document.getElementById('pythagoras-equals-button');
const pythagorasAnswer = document.getElementById('pythagoras-answer');


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

intDivEqualsButton.addEventListener('click', () => {
    let num1 = +intDivNumber1.value;
    let num2 = +intDivNumber2.value;
    intDivAnswer.textContent = integerDivision(num1, num2);
});

pythagorasEqualsButton.addEventListener('click', () => {
    let num1 = +pythagorasNumber1.value;
    let num2 = +pythagorasNumber2.value;
    pythagorasAnswer.textContent = pythagoras(num1, num2);
});



