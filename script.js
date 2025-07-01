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
        return "The elements clash equally! Neither side yields.";
    } else if (
        (humanChoice == "ignis" && computerChoice == "terra") || 
        (humanChoice == "terra" && computerChoice == "aqua") || 
        (humanChoice == "aqua" && computerChoice == "ignis")
    ) {
        humanScore++;
        return `A mighty blow! ${capitalize(humanChoice)} reigns supreme over ${capitalize(computerChoice)}.`;
    } else {
        computerScore++;
        return `The tides turn. ${capitalize(computerChoice)} prevails against ${capitalize(humanChoice)}.`;
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
        resultText.innerHTML = "Victory is yours, Elementalist! The elements bend to your will.<br>(Restart to duel again)";
    } else {
        resultText.innerHTML = "Defeat... The elemental forces have overcome you.<br>(Restart to reclaim your honor)";
    }

    ignisBtn.disabled = true;
    aquaBtn.disabled = true;
    terraBtn.disabled = true;
}