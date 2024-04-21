function getComputerChoice(){
    let random = Math.floor(Math.random()*3);
    let choice = (random === 0) ? 'rock' :
        (random === 1) ? 'paper' :
        (random === 2) ? 'scissor' :
        'error';

    return choice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    const result = document.querySelector('#results');

    if(playerSelection == 'rock' && computerSelection == 'scissor'){
        result.textContent = 'Computer picked scissor. You win! Rock beats scissor.';
        playerScore += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result.textContent = 'Computer picked rock. You win! Paper beats rock.';
        playerScore += 1;
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        result.textContent = 'Computer picked paper. You win! Scissor beats paper.';
        playerScore += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        result.textContent = 'Computer picked paper. You lose! Paper beats rock.';
        computerScore += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        result.textContent = 'Computer picked scissor. You lose! Scissor beats paper.';
        computerScore += 1;
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        result.textContent = 'Computer picked rock. You lose! Rock beats scissor.';
        computerScore += 1;
    } else {
        result.textContent = 'Tie! You both picked ' + playerSelection;
    }

}
  
const score = document.querySelector('#score');
const playerSelection = document.querySelector('#selection');
const winner = document.querySelector('#winner');

function playGame() {
    playerSelection.addEventListener('click', startGame);
}

function startGame(event) {
    let selection = event.target;
    playRound(selection.id, getComputerChoice())
    score.textContent = 'Player score: '+playerScore+' Computer score: '+computerScore;

    if(playerScore == 5 || computerScore == 5){ //end game when 5 points are reached
        playerSelection.removeEventListener('click', startGame) 
        
        if(playerScore > computerScore){
            winner.textContent = 'You win!';
        } else {
            winner.textContent = 'You lose...'
        }
    }
}

console.log(playGame());