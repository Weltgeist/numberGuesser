let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
/**
 * generate a random integer number between 0-9
 * @return {Number} randomly chosen number
 */
const generateTarget = () => Math.floor(Math.random()*10); 
/**
 * find the closest numbers to a secret number between a human guess and a computer guess.
 * True=human Win, False=Computer Win. Human also win on a tie. 
 * @param {Number} humanGuess a number chosen by human player
 * @param {Number} computerGuess a number chosen by computer player
 * @param {Number} secretTarget a secret number used as reference 
 * @returns {Boolean} Results of compare.
 */
const compareGuesses = (humanGuess,computerGuess,secretTarget) => Math.abs(humanGuess - secretTarget)<=Math.abs(computerGuess - secretTarget);
/**
 * updates winner's score.
 * @param {String} winner a string of last round winner. 
 */
const updateScore = winner => {
  if ( winner === 'human'){
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};
/**
 * update the current round number.
 */
const advanceRound = () => {currentRoundNumber++;};
