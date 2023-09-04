export const sum = (num1: number, num2: number): number => {
    return num1 + num2;
}

export const subtract = (num1: number, num2: number): number => {
    return num1 - num2;
}

export const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
}

export const calculator = {
    sum: sum,
    substract: subtract
}