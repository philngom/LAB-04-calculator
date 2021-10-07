// import functions
import { add, subtract, multiply, divide, modulo, integerDivision, pythagoras } from './calculations.js';

// reference needed DOM elements

function setupOperation(stringOp, operation) {
    const number1 = document.getElementById(`${stringOp}-number-1`);
    const number2 = document.getElementById(`${stringOp}-number-2`);
    const equalsButton = document.getElementById(`${stringOp}-equals-button`);
    const answer = document.getElementById(`${stringOp}-answer`);

    equalsButton.addEventListener('click', () => {
        let num1 = Number(number1.value);
        let num2 = Number(number2.value);
        answer.textContent = operation(num1, num2);
    });
}

setupOperation('add', add);
setupOperation('subtract', subtract);
setupOperation('multiply', multiply);
setupOperation('divide', divide);
setupOperation('modulo', modulo);
setupOperation('pythagoras', pythagoras);
setupOperation('int-div', integerDivision);