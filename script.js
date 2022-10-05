const getComputerChoice = () => {
  // Create an array that holds possible choices
  const choices = ['Rock', 'Paper', 'Scissors'];

  // Create a constant that holds a randomly generated number from 0 to choices.length
  const randomNumber = Math.floor(Math.random() * choices.length);

  // Create a variable that holds the value of the element based on random number index
  const choice = choices[randomNumber];

  return choice;
}

const playRound = (playerSelection, computerSelection) => {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();
  let message = null;

  if (playerChoice === computerChoice) {
    message = `Draw! Both selected ${playerChoice}`;
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      message = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
      message = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      message = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
      message = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      message = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
      message = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
  } else {
    message = 'You can only select between "Rock", "Paper", or "Scissors"';
  }

  return message;
}
