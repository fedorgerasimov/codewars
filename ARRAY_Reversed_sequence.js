/*Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1] 
*/

function reverseSeq(n) {
    let array = [];
    for (let i = n; i >= 1; i--) {
        array.push(i);
    }
    return array;
}
console.log(reverseSeq(5));

const reverseSeq1 = n => {
    let array = [];
    for (let i = n; i >= 1; i--) {
        array.push(i);
    }
    return array;
};

const reverseSeq2 = n =>
    Array(n)    // let's start with an array length N
        .fill() // now fill it with empty elements
        .map((element, index) => n - index); //map over this array: take current element and index
                                                //Now push inside an array and number N minus current index
                                                // and return that array



