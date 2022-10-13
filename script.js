import playRound from "./game.js";
import { getComputerChoice } from "./game.js";

// Get rock, paper, scissors buttons
const CHOICES = document.querySelectorAll('button');

// Loop through the choices array
CHOICES.forEach(choice => {
  // Every time the user clicks on the button play a round
  choice.addEventListener('click', () => {
    const playerChoice = choice.value;
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  })
})
