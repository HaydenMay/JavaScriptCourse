'use strict';

let score = 20;
let highScore;
let secretNumber;
let guess;
let answer = (document.querySelector('.number').value =
  Math.floor(Math.random() * 20) + 1);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setBackground = function (color, size) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = size;
};

document.querySelector('.again').addEventListener('click', function reset() {
  answer = document.querySelector('.number').value =
    Math.floor(Math.random() * 20) + 1;
  setBackground('#222', '15rem');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  setScore(score);

  displayMessage('Start guessing...');
});

const gameOver = () => {
  if (document.querySelector('.message').textContent === 'Correct Answer!') {
    setBackground('green', '30rem');
    document.querySelector('.number').textContent = secretNumber;
    if (score > Number(document.querySelector('.highscore').textContent)) {
      document.querySelector('.highscore').textContent = score;
    }
  } else {
    displayMessage('You lost the game...');
    setBackground('darkred', '15rem');
  }
};

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  secretNumber = document.querySelector('.number').value;
  if (1 <= guess && guess <= 20) {
    if (!guess) {
      displayMessage('No Number!');
    } else if (guess === secretNumber) {
      displayMessage('Correct Answer!');
      gameOver();
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');

        score--;
        setScore(score);
      } else {
        setScore('0');
        gameOver();
      }
    }
  } else {
    displayMessage('Please choose a number between 1-20');
  }
});
