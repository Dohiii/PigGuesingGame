'use strict';
const player = document.querySelector('.player');
const playerOne = document.querySelector('.player--1');
const playerTwo = document.querySelector('.player--2');
const playerOneTotal = document.querySelector('#score--1');
const playerTwoTotal = document.querySelector('#score--2');
const playerOneScore = document.querySelector('#current--1');
const playerTwoScore = document.querySelector('#current--2');
const currentScore = document.querySelector('.current-score');
const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const closeModalbtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const winner = document.querySelector('.winner');
const restart = document.querySelector('.restart');

//Game logick
// if (parseInt(playerOneScore.innerText) === 0) {
// }

function playerRollDice() {
  let score = Math.floor(Math.random() * 6) + 1;
  if (playerOne.classList.contains('player--active')) {
    playerOneScore.innerText = parseInt(playerOneScore.textContent) + score;
    dice.src = `dice-${score}.png`;
    console.log(score);
  }
  if (playerTwo.classList.contains('player--active')) {
    playerTwoScore.innerText = parseInt(playerTwoScore.textContent) + score;
    dice.src = `dice-${score}.png`;
    console.log(score);
  }
  if (score === 1) {
    playerOneScore.innerText = 0;
    playerTwoScore.innerText = 0;
    dice.src = `dice-${score}.png`;
    currentScore.innerText = 0;
    changePlayer();
  }
}

function changePlayer() {
  if (playerOne.classList.contains('player--active')) {
    playerOneTotal.innerText =
      parseInt(playerOneTotal.innerText) + parseInt(playerOneScore.textContent);
    playerOneScore.innerText = 0;
    playerOne.classList.remove('player--active');
    playerTwo.classList.add('player--active');
  } else if (playerTwo.classList.contains('player--active')) {
    playerTwoTotal.innerText =
      parseInt(playerTwoTotal.innerText) + parseInt(playerTwoScore.textContent);
    playerTwoScore.innerText = 0;
    playerOne.classList.add('player--active');
    playerTwo.classList.remove('player--active');
  }
  if (parseInt(playerOneTotal.innerText) >= 30) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.getElementById('winner').innerHTML = 'Player 1 Win!!!';
    restart.addEventListener('click', restartGame);
  }

  if (parseInt(playerTwoTotal.innerText) >= 30) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.getElementById('winner').innerHTML = 'Player 2 Win!!!';
    restart.addEventListener('click', restartGame);
  }
}

rollBtn.addEventListener('click', playerRollDice);
holdBtn.addEventListener('click', changePlayer);
newGameBtn.addEventListener('click', restartGame);

function restartGame() {
  window.location.reload();
}
