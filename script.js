let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        return "ignis";
    } else if (computerChoice == 1) {
        return "aqua";
    } else {
        return "terra";
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice == "ignis" && computerChoice == "terra") || 
        (humanChoice == "terra" && computerChoice == "aqua") || 
        (humanChoice == "aqua" && computerChoice == "ignis")
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

const ignisBtn = document.querySelector("#ignis");
const aquaBtn = document.querySelector("#aqua");
const terraBtn = document.querySelector("#terra");
const playerIcon = document.querySelector("#player-icon");
const playerScoreText = document.querySelector("#player-score");
const computerIcon = document.querySelector("#computer-icon");
const computerScoreText = document.querySelector("#computer-score");
const resultText = document.querySelector("#result");

ignisBtn.addEventListener('click', () => handleChoice("ignis"));
aquaBtn.addEventListener('click', () => handleChoice("aqua"));
terraBtn.addEventListener('click', () => handleChoice("terra"));

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
        case "ignis":
            playerIcon.textContent = "🔥";
            break;
        case "aqua":
            playerIcon.textContent = "💧";
            break;
        case "terra":
            playerIcon.textContent = "🌿";
            break;
     }

    switch (computerChoice) {
        case "ignis":
            computerIcon.textContent = "🔥";
            break;
        case "aqua":
            computerIcon.textContent = "💧";
            break;
        case "terra":
            computerIcon.textContent = "🌿";
            break;
    }
}

function gameOver() {
    if (humanScore > computerScore) {
        resultText.textContent = "You won the game! (Refresh to play again)";
    } else {
        resultText.textContent = "You lost the game! (Refresh to play again)";
    }

    ignisBtn.disabled = true;
    aquaBtn.disabled = true;
    terraBtn.disabled = true;
}