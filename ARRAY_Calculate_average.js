/*Write a function which calculates the average
 of the numbers in a given list.
Note: Empty arrays should return 0.
 */
function find_average(array) {
    if (!array.length) {   //If array is empty (!input.length)  return 0/ array.length === 0
        return 0;
    }
    let amount = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        amount ++;
        sum += array[i];
        }
    return sum / amount;
}
console.log(find_average([1,2,3,4])); //=> 2.5
console.log(find_average([]));  //=> 0   
