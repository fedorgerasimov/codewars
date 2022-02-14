/*Create a function which answers the question
"Are you playing banjo?".
If your name starts with the letter "R" or lower case "r",
you are playing banjo!
The function takes a name as its only argument,
and returns one of the following strings:
name + " plays banjo"
name + " does not play banjo"
Names given are always valid strings.*/

function areYouPlayingBanjo(name) {
    return  name[0] === 'r' || name[0] === 'R' ?   //  name[0].toLowerCase() === 'r'
        `${name} plays banjo` :
        `${name} does not play banjo`;}

's'.toLowerCase()
function areYouPlayingBanjo(name) {
    let arr = name.split('')
    let result = ''
    return result = arr[0] === 'r' || arr[0] === 'R' ?
        `${name} plays banjo` :
        `${name} does not play banjo`; }


function areYouPlayingBanjo(name) {
    let arr = name.split('')
    let result = ''
    if (arr[0] === 'r' || arr[0] === 'R') {
        result = `${name} plays banjo`
    }else {
        result = `${name} does not play banjo`
    }
    return result;
}

console.log(areYouPlayingBanjo('Ringo'))
