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
    let positiveAmount = 0;
    let negativeSum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positiveAmount ++;
        }else {
            negativeSum += input[i];
        }
    }
    return [positiveAmount, negativeSum];
}
let testData1 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];  //=> [8, -50]
let testData2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]; //=> [10, -65]
console.log(countPositivesSumNegatives(testData1));
console.log(countPositivesSumNegatives(testData2));


function countPositivesSumNegatives(input) {
    if (!input || !input.length) {  // If the input array is empty (!input.length) or null (!input), return an empty array.
        return [];
    }
    let positiveAmount = 0;
    let negativeSum = 0;
    input.forEach(item => {
        if (item > 0) {
            positiveAmount++;
        } else {
            negativeSum += item;
        }
    });
    return [positiveAmount, negativeSum];
}
let testData3 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];  //=> [8, -50]
let testData4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]; //=> [10, -65]
console.log(countPositivesSumNegatives(testData3));
console.log(countPositivesSumNegatives(testData4));