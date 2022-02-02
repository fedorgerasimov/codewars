/*
The product of all the numbers in the subarrays of the array.
Произведение всех чисел в подмассивах массива.
*/

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    return product;
  }
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
  

