/*multiply the first n elements of an array 
to create the product of those elements. 
умножьте первые n элементов массива, 
чтобы получить произведение этих элементов.
*/
function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++ ) {
        product *=  arr[i];
    }
    return product;
}
console.log(multiply([2,3,4,5], 4));

