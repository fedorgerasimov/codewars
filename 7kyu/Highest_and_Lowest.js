/*
Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/

function highAndLow(numbers){
    let arr = numbers.split(" ");
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return `${max} ${min}`
}

function highAndLow(numbers){
    arr = numbers.split(' ');
    return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

console.log(highAndLow(("1 2 3 -4 5")));
