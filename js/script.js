/*  reference for html
    <button id="btn-r">ROCK</button>
    <button id="btn-p">PAPER</button>
    <button id="btn-s">SCISSORS</button>
*/

const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let computerSelection;

function getComputerChoice() { // function for generate computer choice randomly
    let randomNumber = Math.floor(Math.random() * 3) // create random number 1 to 2
    return choices[randomNumber] // pick a item from the array with the random number generated
}

const buttons = document.querySelectorAll('button'); // selects all buttons

buttons.forEach(element =>
    element.addEventListener('click', () => {
        const playerSelection = element.innerHTML.toLowerCase() // saves the clicked button's innerHTMl to a variable
        if(playerScore <= 4 && computerScore <= 4){
            playRound(playerSelection, computerSelection); // runs the game everytime a buttons clicked
        } else if(playerScore == 5 && playerScore > computerScore){
            div.innerText = `Player Won the Game ${playerScore} to ${computerScore}
            Refresh the page to play again`;
            body.appendChild(div);
        } else if(computerScore == 5 && computerScore > playerScore){
            div.innerText = `Computer Won the Game ${computerScore} to ${playerScore}
            Refresh the page to play again`;
            body.appendChild(div);
        }
    })
)



const div = document.createElement('div');
const body = document.querySelector('body');

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if(playerSelection === computerSelection){
        div.innerText = `Player picked ${playerSelection} Computer picked ${computerSelection} Game enden with draw
        Player Score ${playerScore} : ${computerScore} Computer Score`;
        body.appendChild(div);
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore += 1;
        div.innerText = `Player picked ${playerSelection} Computer picked ${computerSelection} Computer Won ${playerSelection} beats ${computerSelection}
        Player Score ${playerScore} : ${computerScore} Computer Score`;
        body.appendChild(div);
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore += 1;
        div.innerText = `Player picked ${playerSelection} Computer picked ${computerSelection} Player Won ${playerSelection} beats ${computerSelection}
        Player Score ${playerScore} : ${computerScore} Computer Score`;
        body.appendChild(div);
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore += 1;
        div.innerText = `Player picked ${playerSelection} Computer picked ${computerSelection} Player Won ${playerSelection} beats ${computerSelection}
        Player Score ${playerScore} : ${computerScore} Computer Score`;
        body.appendChild(div);
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore += 1;
        div.innerText = `Player picked ${playerSelection} Computer picked ${computerSelection} Computer Won ${playerSelection} beats ${computerSelection}
        Player Score ${playerScore} : ${computerScore} Computer Score`;
        body.appendChild(div);
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore += 1
        div.innerText = `Player picked ${playerSelection} Computer picked ${computerSelection} Player Won ${playerSelection} beats ${computerSelection}
        Player Score ${playerScore} : ${computerScore} Computer Score`;
        body.appendChild(div);
    } else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerScore += 1;
        div.innerText = `Player picked ${playerSelection} Computer picked ${computerSelection} Computer Won ${playerSelection} beats ${computerSelection}
        Player Score ${playerScore} : ${computerScore} Computer Score`;
        body.appendChild(div);
    }
}