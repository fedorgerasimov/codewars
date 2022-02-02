/*Write a recursive function, sum(arr, n), 
that returns the sum of the first n elements of an array arr.
 */
//with For loop
function sum(arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++ ) {
      sum += arr[i];
    }
    return sum;
 }
console.log(sum([1, 5, 6], 0));

//recursive function
function sum(arr, n) {
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n -1) + arr[n - 1];
    }
}
console.log(sum([2, 3, 4], 1)); //>=2