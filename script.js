function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);;

    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Please enter your choice: rock, paper, or scissors")
}