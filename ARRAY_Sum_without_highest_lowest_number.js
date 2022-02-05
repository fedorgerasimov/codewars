/*
Sum all the numbers of a given array ( cq. list ), 
except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge,
even if there are more than one with the same value.
Mind the input validation.
Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array,
 or the given array is an empty list or a list with only 1 element, return 0.
 */
function sumArray1(array) {
    if (!array || array.length <= 1) {   // '!array' check an empty value ( null, None, Nothing etc. )
        return 0;
    }
    let currentMin = array [0]; // first element in array
    let currentMax = array [0];
    let sum =0;
    for (let i = 0; i < array.length; i++){
        if(array[i] < currentMin) {
            currentMin = array[i];
        }if (array[i] > currentMax){
            currentMax = array[i];
        }
        sum += array[i];
    }
    return sum - currentMax - currentMin;
}

function sumArray2(array) {
    if (!array || array.length < 2) {
        return 0; }
    let currentMin = array [0];
    let currentMax = array [0];
    let sum = 0;
    array.forEach(element => {
        if( element < currentMin) {
            currentMin = element;
        }if( element > currentMax) {
            currentMax = element;
        }sum += element;
    });
    return sum - currentMin -currentMax;
}

function sumArray3(array) {
    let sum = 0;
    if (!array || array.length < 2) {
        return 0; }
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum - Math.min(...array) - Math.max(...array);
}

function sumArray4(array) {
    if (!array || array.length < 2) {
        return 0; }
    return array.reduce((element1, element2) =>
    element1 + element2) - Math.min(...array) - Math.max(...array);
}

console.log(sumArray1([ 0, 1, 6, 10, 10 ])); //=> 17 
console.log(sumArray2([ -6, -20, -1, -10, -12 ])); //=> -28
console.log(sumArray3([ -6, 20, -1, 10, -12 ])); // => 3
console.log(sumArray4([ -6, -20, -1, -10, -12 ])); //=> -28