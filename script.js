let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
   Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    let distHumanGuess = Math.abs(secretTarget - humanGuess);
    let distCompGuess = Math.abs(secretTarget - computerGuess);

    if(distHumanGuess > distCompGuess) {
        return true;
    } else if(distHumanGuess < distCompGuess) {
        return false;
    } else {
        return true;
    }


}

const updateScore = winner => {

   
    if(winner === 'human') {
       humanScore++;
    } else if(winner === 'computer') {
        computerScore++;
    }


}

const advanceRound = () => {

   currentRoundNumber++;

}

const getAbsoluteDistance = (secretTarget, distanceGuess) => {

    let distHumanGuess;

    if(distanceGuess < 0 || distanceGuess > 9) {
        distHumanGuess = Math.abs(secretTarget - distCompGuess);
    } else {
        console.log('The number is out of range');
    } 

}