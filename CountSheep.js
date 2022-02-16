/*If you can't sleep, just count sheep!!
Task:
Given a non-negative integer, 3 for example, return a string
with a murmur: "1 sheep...2 sheep...3 sheep...".
Input will always be valid, i.e. no negative integers.
* */

const countSheep = function (num){
    let result = ''
    for (let i = 1; i <= num; i ++) {
        result += `${i} sheep...`   // i +' sheep...'
    }
    return result;
}


const countSheep1 = (num) =>
    [...Array(num)].map((current, index) => `${index + 1} sheep...`).join('');

console.log(countSheep1(3));