/*
Take an array and remove every second element from the array.
 Always keep the first element and start removing with the next element.
Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]*/

function removeEveryOther(arr){
    let newArr = [];
    for ( let i = 0; i < arr.length; i +=2) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function removeEveryOther(arr){
    return arr.filter((elem, index) => index % 2 == 0);
}