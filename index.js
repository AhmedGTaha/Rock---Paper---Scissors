const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerScore');
const computerDisplay = document.getElementById('computerScore');
const resultDisplay = document.getElementById('result');

const playerPrefix = "Player Score: ";
const computerPrefix = "Computer Score: ";

let playerScore = 0;
let computerScore = 0;

if (playerDisplay) playerDisplay.textContent = playerPrefix + playerScore;
if (computerDisplay) computerDisplay.textContent = computerPrefix + computerScore;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "Computer wins!";
    computerScore++;
  }

  if (playerDisplay) playerDisplay.textContent = playerPrefix + playerScore;
  if (computerDisplay) computerDisplay.textContent = computerPrefix + computerScore;
  if (resultDisplay) {
    resultDisplay.textContent = result;

    switch (result) {
      case "You win!":
        resultDisplay.style.color = "#2ba640";
        break;
      case "Computer wins!":
        resultDisplay.style.color = "crimson";
        break;
      default:
        resultDisplay.style.color = "#fff";
        break;
    }
  }
}