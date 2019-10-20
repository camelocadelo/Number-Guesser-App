let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    let myTarget = Math.floor(Math.random() * 10);
    return myTarget;
}

function compareGuesses(humGuess, compGuess, targetik) {
    if (getAbsoluteDistance(targetik,humGuess) > getAbsoluteDistance(targetik - compGuess)){
        return false;
    } else if ((getAbsoluteDistance(targetik,humGuess) < getAbsoluteDistance(targetik,compGuess))){
        return true;
    } else if (getAbsoluteDistance(targetik,humGuess) === getAbsoluteDistance(targetik,compGuess)) {
        return true;
    }
}

function updateScore(myString) {
    if (myString === 'human') {
        humanScore += 1;
    } else if (myString === 'computer') {
        computerScore +=1;
    }
}

function advanceRound(){
    currentRoundNumber += 1;
}

function getAbsoluteDistance(num1, num2) {
    return Math.abs(num1-num2);
}