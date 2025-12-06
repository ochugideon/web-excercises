//Rock, paper and scissors functions

let scores = JSON.parse(localStorage.getItem('scores'));

let scoreText = document.querySelector('.js-scoreText');

scoreText.innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties ${scores.ties}`

updateScoresText();

function updateScoresText() {
  scoreText.innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties ${scores.ties}`
};

function checkScores() {if (scores === null) {scores = {
  wins: 0,
  losses: 0,
  ties: 0
}}};

function main (playerChoice) {
  checkScores()
  const randomNumber = Math.random();
  let computerChoice ='';

  if (randomNumber >= 0.2 && randomNumber < 1/3) {computerChoice = 'Rock'} else if(randomNumber >= 1/3 && randomNumber < 2/3) {computerChoice = 'Paper'} else{computerChoice = 'Scissors'};

  let result = '';

  if (computerChoice === playerChoice) {result = 'It is a tie.'}

  else if (computerChoice === 'Paper' && playerChoice === 'Scissors') {result = 'You win.'} else if (computerChoice === 'Paper' && playerChoice === 'Rock') {result = 'You lost.'}
  
  else if (computerChoice === 'Rock' && playerChoice === 'Paper') {result = 'You win.'} else if (computerChoice === 'Rock' && playerChoice === 'Scissors') {result = 'You lost.'}
  
  else if (computerChoice === 'Scissors' && playerChoice === 'Paper') {result = 'You lost.'} else if (computerChoice === 'Scissors' && playerChoice === 'Rock') {result = 'You win.'};

  if (result === 'You win.') {scores.wins += 1 } else if (result === 'You lost.') {scores.losses +=1 } else {scores.ties +=1};

  localStorage.setItem('scores', JSON.stringify(scores));

  updateScoresText()

  alert(`You choose ${playerChoice}, the computer choose ${computerChoice}. ${result}.
Wins: ${scores.wins}, Losses: ${scores.losses}, Ties ${scores.ties}`);
}

function resetScores() {if (scores.wins || scores.losses || scores.ties) {scores = {
  wins: 0,
  losses: 0,
  ties: 0};
  localStorage.setItem('scores', JSON.stringify(scores));
  updateScoresText();
  alert('scores has been reset !')} else {alert('No scores recorded yet !')}
}
