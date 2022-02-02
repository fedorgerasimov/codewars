/*Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
*/
function doubleArray(arr){
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        arrNew.push(arr[i]*2);
    }
    return arrNew;
}
console.log(doubleArray([1, 2, 3]));

// another solution
function maps(array){
    return array.map(i => i*2);
  }

function maps(array) {
    return array.map(function(num) { // callback function
        return num *2;
    });
}
console.log(maps([4, 8, 16]));

