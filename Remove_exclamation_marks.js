/*Write function RemoveExclamationMarks which
 removes all exclamation marks from a given string.*/

function removeExclamationMarks(s) {
    let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '!') {
            delete arr[i];
        }
    }
    return arr.join('');
}

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}

function removeExclamationMarks(s) {
    return s.split('!').join('');
}

