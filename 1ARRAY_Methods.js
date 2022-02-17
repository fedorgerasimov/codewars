
//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemort'];
const shortName = names.filter(function (name) {  //less than five letters
   return name.length < 5;
});

//map
let answers = ['IvAn', 'AnnA', 'Hello'];
const result = answers.map((item => item.toLowerCase()));
console.log(shortName);
console.log(result);

//every/some  return true/false
const someArray = [4, 'qwq', 'qwerty'];  // at least one number
let atLeastOne = someArray.some(item => typeof(item) === 'number');
console.log(atLeastOne);

const everyArray = [4, 'qwq', 5, 'qwerty'];  // if all numbers are digits
let ifEveryDigit = everyArray.every(item => typeof(item) === 'number');
console.log(ifEveryDigit);

//reduce  - метод перебора
const arr = [4, 5, 1, 3, 2, 6];
const  result1 =arr.reduce((sum, current) => sum + current);
console.log(result1);

const arr1 = ['apple', 'pear', 'plum', 'orange'];
const  result2 =arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(result2);

const obj = {    // найти имена persone
   ivan: 'persone',
   ann: 'persone',
   dog: 'animal',
   cat: 'animal'
};
const newArr = Object.entries(obj)  // превращает объект массив в массиве
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);
console.log(newArr);
