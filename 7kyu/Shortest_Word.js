/*
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.*/

function findShort(s) {
    let words = s.split(' ')
    let shortest = words[0].length
    for (let i = 0; i < words.length; i++) {
        if (shortest > words[i].length)
            shortest = words[i].length
    }
    return shortest
}

function findShort2(s) {
    return s
        .split(' ')
        .map(words => words.length)
        .reduce((words1, words2) => Math.min(words1, words2))
}

let str = "bitcoin take over the world maybe who knows perhaps"
console.log(findShort(str))
console.log(findShort2(str))
