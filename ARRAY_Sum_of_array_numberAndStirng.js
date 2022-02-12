/* Given an array of integers as strings and numbers,
return the sum of the array values as if all were numbers.
Return your answer as a number.
 assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
 */
function sumMix(arr){
    let total = 0
    for ( let i = 0; i < arr.length; i++) {
        total += Number(arr[i]);
        }
    return total;
}


function sumMix2(arr){
    let initialValue = 0
    return arr.reduce(( accumulator, el) => accumulator + Number(el), initialValue);
}

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
console.log(sumMix2(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
