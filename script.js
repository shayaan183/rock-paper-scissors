let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        humanScore++;
        return `You won this round, ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        return `You lost this round, ${computerChoice} beats ${humanChoice}!`;
    }
}

function checkWin() {
    return humanScore == 5 || computerScore == 5;
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const scoreText = document.querySelector("#score");
const resultText = document.querySelector("#result");

rockBtn.addEventListener('click', () => handleChoice("rock"));
paperBtn.addEventListener('click', () => handleChoice("paper"));
scissorsBtn.addEventListener('click', () => handleChoice("scissors"));

function handleChoice(playerChoice) {
    if (checkWin()) {
        gameOver();
    }

    let computerChoice = getComputerChoice();
    let roundResult = playRound(playerChoice, computerChoice);
    
    resultText.textContent = roundResult;
    updateScore();

    if (checkWin()) {
        gameOver();
    }
}

function updateScore() {
    scoreText.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}

function gameOver() {
    if (humanScore > computerScore) {
        resultText.textContent = "You won the game! (Refresh to play again)";
    } else {
        resultText.textContent = "You lost the game! (Refresh to play again)";
    }

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}