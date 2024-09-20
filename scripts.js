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
let humanScore = 0;
let computerScore = 0;

function btnDisable() {
    let gameBtns = document.querySelectorAll('button');
    for (button of gameBtns){
        button.disabled = true;
    }
    }

function scores() {
    compScore.textContent = computerScore;
    playerScore.textContent = humanScore;
}

function playGame() {
    const playerScore = document.querySelector('#playerScore');
    const compScore = document.querySelector('#compScore');
    const winner = document.querySelector('.winner');


    function playRound(humanChoice, compChoice) {
        if (humanChoice == compChoice) {
            winner.textContent = "Draw";
            return;
        }
        else {
            if (humanChoice === "rock" && compChoice === "scissors" || humanChoice === "paper" && compChoice === "rock" || humanChoice === "scissors" && compChoice === "paper") {
                humanScore++;
                if (humanScore === 5){
                    winner.textContent = "Player won the game!";
                    btnDisable();
                    return humanScore;
                }
                else {
                    winner.textContent = `Player won this round! ${humanChoice} beats ${compChoice}`;
                    return humanScore;
                }
            }
            else {
                computerScore++;
                if (computerScore === 5){
                    winner.textContent = "Computer won the game!";
                    btnDisable();
                    return computerScore;
                }
                else {
                    winner.textContent = `Computer won this round! ${compChoice} beats ${humanChoice}`;
                    return computerScore;
                }
            }
        }

    }

    const btns = document.querySelector('.btns');
    btns.addEventListener('click', (event) => {
        let target = event.target;
        playRound(target.id, getComputerChoice());
        scores();
    });
}

playGame();


