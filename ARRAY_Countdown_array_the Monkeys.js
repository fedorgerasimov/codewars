/*
You take your son to the forest to see the monkeys.
You know that there are a certain number there (n), 
but your son is too young to just appreciate the full number,
he has to start counting them from 1.
As a good parent, you will sit and count with him.
Given the number (n), populate an array with all numbers
up to and including that number, but excluding zero.
For example:
monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]
 */
function countDown(n) {
  if (n === 0) {
    return [];
  } else {
    const array = countDown(n - 1);
    array.push(n);
    return array;
  }
}
console.log(countDown(5));

function countDown(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {  // or 1 < n + 1
    array.push(i);    // or if .unshift [ 5, 4, 3, 2, 1 ]
  }
  return array;
}
console.log(countDown(5));

function countDown(n) {
  return Array(n).  // let's start with an array length N
          fill(0).  // now fill it with 0 elements
          map((element, index) => index +1); //map over this array: take current element and index
}                                              //Now push inside an array and number N minus current index
console.log(countDown(10));                  // and return that array
                                          

