/*  reference for html
    <button id="btn-r">ROCK</button>
    <button id="btn-p">PAPER</button>
    <button id="btn-s">SCISSORS</button>
*/

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() { // function for generate computer choice randomly
    let randomNumber = Math.floor(Math.random() * 3) // create random number 1 to 2
    return choices[randomNumber] // pick a item from the array with the random number generated
}