// import functions
import { add } from './calculations.js';
import { subtract } from './calculations.js';

const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const equalsButton = document.getElementById('equals-button');
const addAnswer = document.getElementById('add-answer');

const subtractNumber1 = document.getElementById('subtract-number-1');
const subtractNumber2 = document.getElementById('subtract-number-2');
const subtractEqualsButton = document.getElementById('subtract-equals-button');
const subtractAnswer = document.getElementById('subtract-answer');

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
