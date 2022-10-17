import playRound from "./game.js";
import { getComputerChoice } from "./game.js";

// Get rock, paper, scissors buttons
const CHOICES = document.querySelectorAll('img');

// Loop through the choices array
CHOICES.forEach(choice => {
  // Every time the user clicks on the button play a round
  choice.addEventListener('click', () => {
    const playerChoice = choice.alt;
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  })
})
