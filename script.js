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
const playerIcon = document.querySelector("#player-icon");
const playerScoreText = document.querySelector("#player-score");
const computerIcon = document.querySelector("#computer-icon");
const computerScoreText = document.querySelector("#computer-score");
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
    updateIcons(playerChoice, computerChoice)

    if (checkWin()) {
        gameOver();
    }
}

function updateScore() {
    playerScoreText.textContent = `Player: ${humanScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
}

function updateIcons(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            playerIcon.textContent = "🪨";
            break;
        case "paper":
            playerIcon.textContent = "📃";
            break;
        case "scissors":
            playerIcon.textContent = "✂️";
            break;
     }

    switch (computerChoice) {
        case "rock":
            computerIcon.textContent = "🪨";
            break;
        case "paper":
            computerIcon.textContent = "📃";
            break;
        case "scissors":
            computerIcon.textContent = "✂️";
            break;
    }
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