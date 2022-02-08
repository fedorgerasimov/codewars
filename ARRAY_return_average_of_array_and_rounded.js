/*It's the academic year's end, fateful moment of your school report. 
The averages must be calculated.
 All the students come to you and entreat you to calculate their average for them. 
 Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.
 */
function getAverage(marks){
   let sumMark = 0;
   let totalMark = 0;
   for (let i = 0; i < marks.length; i++){
       totalMark ++;
       sumMark += marks[i];
   }
   return Math.floor((sumMark/totalMark)); 
}

function getAverage(marks) {
    return Math.floor(marks.reduce((total, current) => total + current) / marks.length);
}
  

function getAverage(marks){
    let totalSum = 0;
    marks.forEach(el => totalSum += el);  // el == each element in array
    return Math.floor(totalSum / marks.length);
}

let test1 =[9,14,3,19,9,7,13,17,15,16,3,16,11,10,13,10,10,17]; //=>11
console.log(getAverage(test1));
let test2 =[9,14,3,19,9,7,13,17,15,16,3,16,11,10,13,10,10,17]; //=>11
console.log(getAverage(test2));
let test3 =[9,14,3,19,9,7,13,17,15,16,3,16,11,10,13,10,10,17]; //=>11
console.log(getAverage(test2));