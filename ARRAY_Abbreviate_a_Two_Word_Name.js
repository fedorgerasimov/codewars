/* Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F
*/
function abbrevName(name){
    let array = name.split(' ');
    let firstName = array[0];
    let secondName = array[1];
    let result = firstName[0].toUpperCase() + '.' + secondName[0].toUpperCase();
    return result;
}


