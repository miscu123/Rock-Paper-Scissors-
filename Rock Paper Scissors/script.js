let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');

// Choices
const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
};

const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return 'Tie!';
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++;
        return 'The player wins the round!';
    } else {
        computerScore++;
        return 'The robot wins the round!';
    }
};

const updateScore = () => {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
};

const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const winnerMessage = determineWinner(playerChoice, computerChoice);

    resultElement.innerHTML = `
        Player choice: <img src="${playerChoice}.svg" alt="${playerChoice}" width="50" height="50">
        | Robot choice: <img src="${computerChoice}.svg" alt="${computerChoice}" width="50" height="50">
        | Result: ${winnerMessage}
    `;

    updateScore();
};

const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    resultElement.innerHTML = '';
    updateScore();

    alert("The game has been reset! Ready for a new round?");
};

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

document.getElementById('reset').addEventListener('click', resetGame);
