let SomeArrays = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};
  
  console.log(SomeArrays([2, 3, 9], [5, 10, 12]));
  console.log(SomeArrays([3, 10, 4], [3, 10, 4]));
  console.log(SomeArrays([3, 1, "apple"], [3, 1, "apple"]));