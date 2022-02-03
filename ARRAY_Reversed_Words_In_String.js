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


const reverseWords1 = str => str.split(' ').reverse().join(' '); // ARROW FUNCTION
console.log(reverseWords1("The greatest victory is that which requires no battle"));







