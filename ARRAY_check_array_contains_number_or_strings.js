/*You will be given an array a and a value x.
 All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
 */
function check(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}


function check(arr, value) {
    if (arr.includes(value)) {
        return true;
    }else {
        return false;
    }
}


const check1 = (arr,value)=>arr.includes(value);

console.log(check([66, 110, 101], 101));
console.log(check(['t', 'e', 's', 't'], 'e'));

