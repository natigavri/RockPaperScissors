function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    switch (compChoice) {
        case 0:
            compChoice = "rock";
            break;
        case 1:
            compChoice = "paper";
            break;
        case 2:
            compChoice = "scissors";
            break;
    }
    return compChoice;
}

function getHumanChoice() {
    let humanChoice = "null";
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Choose Rock\\Paper\\Scissors:").toLowerCase();
    }
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, compChoice) {
        if (humanChoice == compChoice) {
            console.log("Draw");
            return;
        }
        else {
            if (humanChoice === "rock" && compChoice === "scissors" || humanChoice === "paper" && compChoice === "rock" || humanChoice === "scissors" && compChoice === "paper") {
                humanScore++;
                console.log(`Human won! ${humanChoice} beats ${compChoice}`);
                return humanScore;
            }
            else {
                computerScore++;
                console.log(`Computer won! ${compChoice} beats ${humanChoice}`);
                return computerScore;
            }
        }
    }
    let games = 1;
    while (games <= 5) {
        console.log(`Game number ${games}`);
        playRound(getHumanChoice(), getComputerChoice());
        console.log("==============================================");
        games++;
    }
    console.log("Game Over!");
    console.log(`Computer: ${computerScore} points.`);
    console.log(`Player: ${humanScore} points.`);
}

playGame();