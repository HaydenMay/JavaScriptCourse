'use strict';

//initialization of elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0Score = document.getElementById('current--0');
const current1Score = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let scores, gamePlaying, activePlayer, currentScore;
//game setup
const init = function () {
  scores = [0, 0];
  gamePlaying = true;
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0Score.textContent = 0;
  current1Score.textContent = 0;

  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.querySelector('h2').classList.add('hidden');
  player1El.querySelector('h2').classList.add('hidden')
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const declareWinner = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document.querySelector(`.player--${activePlayer}`).querySelector('h2').classList.remove('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
};

//Rolling a dice
btnroll.addEventListener('click', function () {
  if (gamePlaying) {
    //1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1; if true, switch to next player
    if (dice !== 1) {
      //add to total
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (gamePlaying) {
    // 1. Add current score to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    currentScore = 0;
    //2. Check score is >= 100
    //finish game
    if (scores[activePlayer] >= 10) {
      gamePlaying = false;
      declareWinner();
      diceEl.classList.add('hidden');
    } else {
      //Switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
