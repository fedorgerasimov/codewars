/*
Given a string of digits, you should replace any
 digit below 5 with '0' and any digit 5 and above with '1'. 
 Return the resulting string.
Note: input will never be an empty string
 */
function fakeBin(x){
    let arr = [];
    x = x + ''; // check that input will never be an empty string
    for (let i = 0; i < x.length; i++) {
        if(x[i] < 5) {
            arr[i] = 0;
        }else {
            arr[i] = 1;
        }
    }
    return arr.join('');
}


function fakeBin(x){
    return(x + "").replace(/[0-4]/g, '0').replace(/[5-9]/g,'1');  //String.prototype.replace() с RegExp /([0-4])|([5-9])/g
}


function fakeBin(x){
    return x.split('').map((element) => (element < 5 ? 0 : 1)).join('');  // (element < 5 ? 0 : 1) if element < 5 return(?) 0, 
}                                                                       //otherwise return(:) 1;


console.log(fakeBin('45385593107843568')); //=>01011110001100111
console.log(fakeBin('366058562030849490134388085')); //=>'011011110000101010000011011
console.log([12321312].map((Number)).join(''));