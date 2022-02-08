// Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'
//'word'   =>  'drow
function solution(str){
    let reverseStr = ""; // swap(reverse) all characters in a string but not words
    for ( let i = str.length -1; i >= 0 ; i--){
        reverseStr += str[i];}
    return reverseStr;
}


function reverseWords(str){  // swap(reverse) all characters in a string but not words
    let newStr = str.split('').reverse().join('');
    return newStr;
}

console.log(solution("Reversing a String in JavaScript"));
console.log(reverseWords("The greatest victory is that which requires no battle")); 