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
    let result = document.querySelector('#results');

    if(playerSelection == 'rock' && computerSelection == 'scissor'){
        result.textContent = 'You win! Rock beats scissor.';
        playerScore += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result.textContent = 'You win! Paper beats rock.';
        playerScore += 1;
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        result.textContent = 'You win! Scissor beats paper.';
        playerScore += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        result.textContent = 'You lose! Paper beats rock.';
        computerScore += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        result.textContent = 'You lose! Scissor beats paper.';
        computerScore += 1;
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        result.textContent = 'You lose! Rock beats scissor.';
        computerScore += 1;
    } else {
        result.textContent = 'Tie! You both picked ' + playerSelection;
    }

}
  
function playGame() {
    let playerSelection = document.querySelector('#selection');
    let score = document.querySelector('#score');

    playerSelection.addEventListener('click', (event) => {
        let selection = event.target;
        playRound(selection.id, getComputerChoice())
        score.textContent = 'Player score: '+playerScore+' Computer score: '+computerScore;
        //console.log('Player score: '+playerScore+' Computer score: '+computerScore);
    });

    
    
}

console.log(playGame());