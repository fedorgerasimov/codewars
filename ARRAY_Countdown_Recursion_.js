//Use Recursion to Create a Countdown
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5)); // => [1, 2, 3, 4, 5]
  
  
  function countdown(n){
    if (n < 1) {
      return [];
    }else {
      let countArray = countdown(n -1);
      countArray.unshift(n);
      return countArray;
    }
  }
  function countdown(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
  }
  console.log(countdown(5)); //=> [ 5, 4, 3, 2, 1 ]

  
  //Use Recursion to Create a Range of Numbers
  function rangeOfNumbers(startNum, endNum) {
    if ( endNum - startNum === 0) {
      return [startNum];
    } else {
      let result = rangeOfNumbers(startNum, endNum - 1);
      result.push(endNum);
      return result;
    }
  }
  console.log(rangeOfNumbers(5, 10)); //=> [ 5, 6, 7, 8, 9, 10 ]
  
  
  function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum
      ? [startNum]
      : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
  }
  console.log(rangeOfNumbers(5, 10)); //=> [ 5, 6, 7, 8, 9, 10 ]