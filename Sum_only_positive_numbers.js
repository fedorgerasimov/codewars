let sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }
    if (a <= 0 || b <= 0) {
        return 'Number are not positive'
    }
    return a + b
}
console.log(sumPositiveNumbers(4, 5));