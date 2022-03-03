/*
Write a function that finds the sum of all its arguments.
eg:
sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15*/

function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

const sum1 = () => {
    return [...arguments].reduce((el1, el2) => el1 + el2,0);
};