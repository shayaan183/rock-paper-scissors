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

function getHumanChoice() {
    return prompt("Please enter your choice: rock, paper, or scissors");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice == "rock" && computerChoice == "scissors") || 
            (humanChoice == "paper" && computerChoice == "rock") || 
            (humanChoice == "scissors" && computerChoice == "paper")
        ) {
            console.log(`You won this round, ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
        } else {
            console.log(`You lost this round, ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! You lost the game!");
    } else {
        console.log("The game ended in a tie!");
    }
}

playGame();