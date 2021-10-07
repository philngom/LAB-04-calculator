export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function multiply(x, y) {
    return x * y;
}

export function divide(x, y) {
    return x / y;
}

export function modulo(x, y) {
    return x % y;
}

export function integerDivision(x, y) {
    return Math.floor(x / y);
}

export function pythagoras(x, y) {
    let side1 = x * x;
    let side2 = y * y;
    return Math.sqrt(side1 + side2);
}