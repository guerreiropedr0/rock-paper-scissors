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

  console.log(roundWinner);
  updateScoreboard(roundWinner);
  return roundWinner;
}

const updateScoreboard = (roundWinner) => {
  const scoreBoard = document.querySelector('#scoreboard');
  let playerScore = Number(scoreBoard.innerText[7]);
  let computerScore = Number(scoreBoard.innerText[9]);

  if (roundWinner) {
    if (roundWinner === 'Player') {
      playerScore++;
    } else {
      computerScore++;
    }
  }

  scoreBoard.innerHTML = `<h1>Score: ${playerScore}-${computerScore}</h1>`;

  const gameWinner = checkGameWinner(playerScore, computerScore);

  if (gameWinner) {
    showGameWinner(gameWinner);
    resetScoreboard();
  }
}

const resetScoreboard = () => {
  const scoreBoard = document.querySelector('#scoreboard');

  scoreBoard.innerHTML = '<h1>Score: 0-0</h1>';
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
