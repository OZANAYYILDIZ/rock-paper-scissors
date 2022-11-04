const allChoices = ["rock", "paper", "scissors"]; // options for computer to pick from.


function getComputerChoice(){ // function for computer to pick one of the options.
    let randomNumber = Math.floor(Math.random() * 3); //randomly creates a number between 0-2
    return allChoices[randomNumber]; // created random number used to return a item inside of array.
}