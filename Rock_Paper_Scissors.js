/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.
Examples:
rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
* */
const rps = (p1, p2) => {
    let result = ''
    if (p1 === p2) {
        return result = 'Draw!';
    }
    if (p1 === 'rock' && p2 === 'scissors') {
        return result = 'Player 1 won!';
    } else if (p1 === 'scissors' && p2 === 'paper') {
        return result = 'Player 1 won!';
    } else if (p1 === 'paper' && p2 === 'rock') {
        return result = 'Player 1 won!';
    } else {
        return result = 'Player 2 won!'
    }
}

function rockPaperScissors(p1, p2) {
    if (p1 === p2) {
        return `Draw!`;
    }
    if (p1 === 'rock' && p2 === 'scissors') {
        return `Player 1 won!`;
    } else if (p1 === 'paper' && p2 === 'rock') {
        return `Player 1 won!`;
    } else if (p1 === 'scissors' && p2 === 'paper') {
        return `Player 1 won!`;
    } else {
        return `Player 2 won!`;
    }
}
