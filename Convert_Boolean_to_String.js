/*Implement a function which convert
 the given boolean value into its string representation.
Note: Only valid inputs will be given.
 */
function booleanToString(b){
    if (b === true) {
        return `${true}`;
    }
    return `${false}`;
}


function booleanToString(b){
    return b.toString();
}


function booleanToString(b){
    return b ? 'true' : 'false';
}


const booleanToString1 = b => (b === true) ? 'true' : 'false';
