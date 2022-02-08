/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. 
You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. 
Now calculate the average and compare your score!
Return True if you're better, else False!
Note:
Your points are not included in the array of your class's points. 
For calculating the average point you may add your point to the given array!
 */
function betterThanAverage(classPoints, yourPoints) {
    let accumulate = 0;
    //let amount = 0;
    let average = 0;
    for (let i = 0; i < classPoints.length; i ++) {
        accumulate += classPoints[i];
        //amount ++
    }
    average = accumulate/classPoints.length;  // average = accumulate/amount
    return yourPoints > average;
}


function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((acc, item) => acc + item, 0) / classPoints.length < yourPoints;
}
/* classPoints.reduce((acc, item) => acc + item, 0) - calculate the average
                    acc = accumulate, item = current value, 0 initial value of  accumulate */