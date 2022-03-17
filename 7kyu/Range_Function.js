// range function that returns numbers in ascending order

function numberRange (start, end) {
    return [...Array(end - start + 1)].map((el, i) => start + i);
}

console.log(numberRange(4,25))