export const getComputerChoice = () => {
  // Create an array that holds possible choices
  const choices = ['Rock', 'Paper', 'Scissors'];

  // Create a constant that holds a randomly generated number from 0 to choices.length
  const randomNumber = Math.floor(Math.random() * choices.length);

  // Create a variable that holds the value of the element based on random number index
  const choice = choices[randomNumber];

  return choice;
}

const getCapitalized = (word) => {
  const firstLetter = word.slice(0, 1);
  const remainingLetters = word.slice(1);
  const capitalizedWord = firstLetter.toUpperCase() + remainingLetters.toLowerCase();

  return capitalizedWord;
}

const playRound = (playerSelection, computerSelection) => {
  // Capitalize arguments for compatibility
  const playerChoice = getCapitalized(playerSelection);
  const computerChoice = getCapitalized(computerSelection);
  let roundWinner = null;

  // Game rules
  if (playerChoice === computerChoice) {
    roundWinner = null;
  } else if (playerChoice === "Paper") {
    if (computerChoice === "Rock") {
      roundWinner = 'Player';
    } else {
      roundWinner = 'Computer';
    }
  } else if (playerChoice === "Rock") {
    if (computerChoice === "Scissors") {
      roundWinner = 'Player';
    } else {
      roundWinner = 'Computer';
    }
  } else if (playerChoice === "Scissors") {
    if (computerChoice === "Paper") {
      roundWinner = 'Player';
    } else {
      roundWinner = 'Computer';
    }
  }

  showRoundWinner(roundWinner);
  updateScoreboard(roundWinner);
  return roundWinner;
}

const showRoundWinner = (roundWinner) => {
  const ROUND_WINNER = document.querySelector('#round-winner');

  if (roundWinner) {
    ROUND_WINNER.textContent = `${roundWinner} won!`;
  } else {
    ROUND_WINNER.textContent = 'Draw!';
  }

}

const updateScoreboard = (roundWinner) => {
  const ROUND_SCORE = document.querySelector('#round-score');
  let playerScore = Number(ROUND_SCORE.innerText[7]);
  let computerScore = Number(ROUND_SCORE.innerText[9]);

  if (roundWinner) {
    if (roundWinner === 'Player') {
      playerScore++;
    } else {
      computerScore++;
    }
  }

  ROUND_SCORE.textContent = `Score: ${playerScore}-${computerScore}`;

  const gameWinner = checkGameWinner(playerScore, computerScore);

  if (gameWinner) {
    showGameWinner(gameWinner);
    resetGame();
  }
}

const resetGame = () => {
  resetScoreboard();
  resetRoundInfo();
}

const resetScoreboard = () => {
  const ROUND_SCORE = document.querySelector('#round-score');

  ROUND_SCORE.textContent = 'Score: 0-0';
}

const resetRoundInfo = () => {
  const ROUND_WINNER = document.querySelector('#round-winner');
  ROUND_WINNER.textContent = '';
}

const checkGameWinner = (playerScore, computerScore) => {
  let gameWinner = null;

  if (playerScore >= 5) {
    gameWinner = 'Player';
  } else if (computerScore >= 5) {
    gameWinner = 'Computer';
  }

  return gameWinner;
}

const showGameWinner = (gameWinner) => {
  let message = null;

  if (gameWinner) {
    message = `${gameWinner} won the game!`;
  }

  alert(message);
}

export default playRound;
