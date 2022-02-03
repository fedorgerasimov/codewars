/*Given an array of integers.
Return an array, where the first element is the count of positives numbers
 and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input array is empty or null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
you should return [10, -65].
*/
function countPositivesSumNegatives(input) {
    if (!input || !input.length) {  // If the input array is empty (!input.length) or null (!input), return an empty array.
        return [];
    }
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
                firstSum ++;
        }else {
                secondSum += input[i];
        }
    }
    return [firstSum, secondSum];
}
let testData1 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];  //=> [8, -50]
let testData2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]; //=> [10, -65]
console.log(countPositivesSumNegatives(testData1));
console.log(countPositivesSumNegatives(testData2));


function countPositivesSumNegatives(input) {
    if (!input || !input.length) {  // If the input array is empty (!input.length) or null (!input), return an empty array.
        return [];
    }
    let first = 0;
    let second = 0;
    input.forEach(item => {
        if (item > 0) {
            first++;
        } else {
            second += item;
        }
    });
    return [first, second];
}

