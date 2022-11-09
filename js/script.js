/*  reference for html
    <button id="btn-r">ROCK</button>
    <button id="btn-p">PAPER</button>
    <button id="btn-s">SCISSORS</button>
*/

const choices = ['rock', 'paper', 'scissors'];
let playerScore;
let computerScore;
let computerSelection;

function getComputerChoice() { // function for generate computer choice randomly
    let randomNumber = Math.floor(Math.random() * 3) // create random number 1 to 2
    return choices[randomNumber] // pick a item from the array with the random number generated
}

const buttons = document.querySelectorAll('button'); // selects all buttons

buttons.forEach(element =>
    element.addEventListener('click', () => {
        const playerSelection = element.innerHTML.toLowerCase() // saves the clicked button's innerHTMl to a variable
        playRound(playerSelection, computerSelection); // runs the game everytime a buttons clicked
    })
)

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if(playerSelection === computerSelection){
        console.log(`Player picked ${playerSelection} Computer picked ${computerSelection} Game enden with draw`);
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log(`Player picked ${playerSelection} Computer picked ${computerSelection} Computer Won ${playerSelection} beats ${computerSelection}`);
        computerScore += 1;
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log(`Player picked ${playerSelection} Computer picked ${computerSelection} Player Won ${playerSelection} beats ${computerSelection}`);
        playerScore += 1;
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log(`Player picked ${playerSelection} Computer picked ${computerSelection} Player Won ${playerSelection} beats ${computerSelection}`);
        playerScore += 1;
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log(`Player picked ${playerSelection} Computer picked ${computerSelection} Computer Won ${playerSelection} beats ${computerSelection}`);
        computerScore += 1;
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log(`Player picked ${playerSelection} Computer picked ${computerSelection} Player Won ${playerSelection} beats ${computerSelection}`);
        playerScore += 1
    } else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log(`Player picked ${playerSelection} Computer picked ${computerSelection} Computer Won ${playerSelection} beats ${computerSelection}`);
        computerScore += 1;
    }
}