/*
Your Job
Find the sum of all multiples of n below m
Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"*/

function sumMul(n,m){
    if (m <= n) {
        return "INVALID";
    }
    let NumberOfMultip = m - (m % n || n);
    return (n + NumberOfMultip) / 2 * NumberOfMultip / n;
}
/*This is based on the fact that the average of [2, 8]
is the same as the average of [2, 4, 6, 8],
which means that (2 + 8) / 2 === (2 + 4 + 6 + 8) / 4,
 where 2 + 4 + 6 + 8 is the sum you're looking for.*/

function sumMul(n,m){
    if ( m / n < 1 || n >= m) return "INVALID";
    return Array(Math.ceil(m/n) -1 )   // return array
        .fill(n).map( (el,i) => el * (i + 1) )
        .reduce( (sum, el) => sum + el, 0);
}

console.log(Array(Math.ceil(13/3) -1 ).fill(3))