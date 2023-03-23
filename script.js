let numb = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let Highscore = 0;
// document.querySelector('.number').textContent = numb;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '🚫No Number';
  }
  else if (guess === numb) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = numb;
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > Highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  else if (guess > numb) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.message').textContent = 'You lost the game!!';
    }
  }
  else if (guess < numb) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.message').textContent = 'You lost the game!!';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numb = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
