import game from './game.js';

const START_GAME = document.getElementById('start');


START_GAME.addEventListener('click', () => {
  game();
});
