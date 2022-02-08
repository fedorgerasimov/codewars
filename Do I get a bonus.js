/*It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... 
but who is going to make the most money?
Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. 
If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
Return the total figure the individual will
 receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).
 */
 function bonusTime(salary, bonus) {
    let result = 0;
    if (bonus == true) {
        result = salary * 10;
    }else{
        result = salary;
    }
    return "\u00A3" +result;
 }


function bonusTime(salary, bonus) {
    return `£${ bonus ? salary * 10 : salary }`;
} 


function bonusTime(salary, bonus) {
    if (bonus === true) {
        return `£${salary * 10}`;
    }
    return `£${salary}`;
 }

 
const bonusTime1 = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`;


console.log(bonusTime(20000, true)); 
console.log(bonusTime1(20000, true)); 
