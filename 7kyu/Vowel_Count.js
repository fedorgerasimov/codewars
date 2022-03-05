/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/


function getCount(str) {
    let vowels = str.match(/[aeiou]/gi);
    if (vowels === null) {    // vowels === null ? 0 : vowels.length
        return 0;
    } else {
        return vowels.length;
    }
}

function getCount2(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}


