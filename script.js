'use strict';

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let scoreChange = document.querySelector('.score');
let score = 20;
let highScore = 0;
function context(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    document.querySelector('.message').classList.add('animate__animated','animate__heartBeat');
    context('Please enter a number 🙏🏻');
  } else if (guessNumber === secretNumber) {
    context('Wohooo Your Guess Is Right 🎉🎉');
    document.querySelector('body').style.backgroundColor = '#2bea6e';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      context(
        guessNumber > secretNumber
          ? 'Your Guess Is Too High 📈'
          : 'Your Guess Is Too Low 📉'
      );
      score -= 1;
      document.querySelector('.score').textContent = score;
    } 
    else{
      context('You Are Out Of Chances 🙁 ');
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  context('Keep Guessing ..🤔');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#6225ef';
  document.querySelector('.number').style.width = '15rem';
});
