/*This kata is about multiplying a given number
 by eight if it is an even number
 and by nine otherwise.
 */
 function simpleMultiplication(number) {
    let result = 0;
    if (number % 2 === 0) {
        result = number * 8;
    }else{
        result = number * 9;
    }
    return result;
}

function simpleMultiplication(number) {
    return (number % 2 == 0) ? number * 8 : number * 9;
}


const simpleMultiplication = number => number % 2 == 0 ? number * 8 : number * 9;


const simpleMultiplication1 = number => number * (8 + number % 2); // if you take the remainder of division(%)
//console.log(simpleMultiplication(15))   => 15 * (8 + 1) = 135   // odd numbers, it always returns 1