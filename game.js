const OPTIONS_CONTAINER = document.getElementById('options');

export const getComputerChoice = () => {
  // Create an array that holds possible choices
  const choices = ['Rock', 'Paper', 'Scissors'];

  // Create a constant that holds a randomly generated number from 0 to choices.length
  const randomNumber = Math.floor(Math.random() * choices.length);

  // Create a variable that holds the value of the element based on random number index
  const choice = choices[randomNumber];

  return choice;
}

const getPlayerChoice = () => {
  // Get input from user
  const playerChoice = prompt('Rock, Paper, or Scissors?');

  return playerChoice;
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
  let winner = null;

  // Game rules
  if (playerChoice === computerChoice) {
    winner = null;
  } else if (playerChoice === "Paper") {
    if (computerChoice === "Rock") {
      winner = 'Player';
    } else {
      winner = 'Computer';
    }
  } else if (playerChoice === "Rock") {
    if (computerChoice === "Scissors") {
      winner = 'Player';
    } else {
      winner = 'Computer';
    }
  } else if (playerChoice === "Scissors") {
    if (computerChoice === "Paper") {
      winner = 'Player';
    } else {
      winner = 'Computer';
    }
  }

  showRoundWinner(playerChoice, computerChoice, winner);
  return winner;
}

const game = () => {
  // Keep track of scores
  let playerScore = 0;
  let computerScore = 0;

  // Play 5 rounds
  for (let round = 0; round < 5; round++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    // Get round winner and show
    const roundWinner = playRound(playerChoice, computerChoice);
    showRoundWinner(playerChoice, computerChoice, roundWinner);

    // Update scores
    if (roundWinner) {
      if (roundWinner === 'Player') {
        playerScore++;
      } else {
        computerScore++;
      }
    }
  }
  showGameWinner(playerScore, computerScore);
}

const showRoundWinner = (playerChoice, computerChoice, winner) => {
  let message = null;

  if (!winner) {
    message = `Draw! Both selected ${playerChoice}`;
  } else {
    message = `${winner} won this round! ${playerChoice} vs ${computerChoice}`;
  }

  console.log(message);
  return message;
}

const showGameWinner = (playerScore, computerScore) => {
  let message = null;

  if (playerScore === computerScore) {
    message = 'This game is a draw!';
  } else if (playerScore > computerScore) {
    message = 'The winner is the Player!'
  } else {
    message = 'The winner is the Computer';
  }

  message += ` Player score: ${playerScore} | Computer score: ${computerScore}`

  console.log(message);
}

export default playRound;
