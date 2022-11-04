console.log(`WELLCOME TO ROCK PAPER SCISSORS
Write your choice and get started`)


const allChoices = ["rock", "paper", "scissors"]; // options for computer to pick from.
let computerScore = 0;
let playerScore = 0;
let inputPlayer;
let inputComputer;

const playerSelection = inputPlayer;
const computerSelection = inputComputer;

function getComputerChoice(){ // function for computer to pick one of the options.
    let randomNumber = Math.floor(Math.random() * 3); //randomly creates a number between 0-2
    return allChoices[randomNumber]; // randomNumber used to return a item inside of array.
}

function playRound(){ // one round of rock paper scissors
    inputPlayer = prompt("rock", "paper", "scissors").toLowerCase(); // players choice
    inputComputer = getComputerChoice();
    const playerSelection = inputPlayer;
    const computerSelection = inputComputer;

    if(playerSelection === computerSelection){
        console.log("game ended with draw");
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("Computer won. Paper beats Rock");
        computerScore += 1;
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("Player won. Rock beats Scissors");
        playerScore += 1;
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("Player won. Rock beats Scissors");
        playerScore += 1;
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("Computer won. Scissors beats Paper");
        computerScore += 1;
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("Player won. Scissors beats Paper");
        playerScore += 1
    } else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Computer won. Rock beats Scissors");
        computerScore += 1;
    }

    console.log("Player Score: " + playerScore)
    console.log("Computer Score: " + computerScore)
    console.log(`PLAYER SELECTION IS : "${playerSelection.toUpperCase()}" COMPUTER SELECTION IS : "${computerSelection.toUpperCase()}"`)
}

function game(){ // function to run the game until someone reaches to 5
    while(playerScore <= 4 && computerScore <= 4){
        playRound();
    }
    if(playerScore > computerScore){
        console.log(`Congratulations, you won by ${playerScore} to ${computerScore}`)
    } else if (playerScore < computerScore){
        console.log(`You suck!`)
        console.log(`REFRESH THE PAGE TO PLAY AGAIN!`)
    }
}
 game();