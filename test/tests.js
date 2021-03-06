// IMPORT MODULES under test here:
import { add, subtract, multiply, divide, modulo, integerDivision, pythagoras } from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('testing add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 8;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('testing subtract function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 2;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('testing multiply function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 6;
    const expected = 24;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('testing divide function', (expect) => {
    //Arrange
    const x = 20;
    const y = 2;
    const expected = 10;

    //Act
    const actual = divide(x, y);

    //Expect
    expect.equal(actual, expected);
});

test('testing modulo function', (expect) => {
    //Arrange
    const x = 4;
    const y = 2;
    const expected = 0;

    //Act
    const actual = modulo(x, y);

    //Expect
    expect.equal(actual, expected);
});

test('testing integer division function', (expect) => {
    //Arrange
    const x = 10;
    const y = 3;
    const expected = 3;

    //Act
    const actual = integerDivision(x, y);

    //Expect
    expect.equal(actual, expected);
});

test('testing pythagoras function', (expect) => {
    //Arrange
    const x = 3;
    const y = 4;
    const expected = 5;

    //Act
    const actual = pythagoras(x, y);

    expect.equal(actual, expected);
});