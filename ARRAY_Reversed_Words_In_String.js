/*Complete the solution so that it reverses all of the words within the string passed in.
Example:
"The greatest victory is that which requires no battle" -->
 "battle no requires which that is victory greatest The"
ALGORITHMSSTRINGS
*/
function reverseWords(str) {
   let arr = str.split(' ').reverse().join(' '); // if don't add a space " ", will be different result
   return arr;
}
console.log(reverseWords("The greatest victory is that which requires no battle"));


function reverseWords(str){  // swap(reverse) all characters in a string but not words
    let newStr = str.split('').reverse().join('');
    return newStr;
}
console.log("The greatest victory is that which requires no battle"); 

let str = "The greatest victory"; // swap(reverse) all characters in a string but not words
let newStr = '';
for (let i = str.length -1; i >= 0; i--){
    newStr += str[i];
}
console.log(newStr);