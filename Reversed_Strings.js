// Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'
//'word'   =>  'drow
function solution(str){
    let reverseStr = "";
    for ( let i = str.length -1; i >= 0 ; i--){
        reverseStr += str[i];}

    return reverseStr;
}
console.log(solution("Reversing a String in JavaScript"));