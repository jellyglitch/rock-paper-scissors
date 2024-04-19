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
    let resultP = document.createElement('p');
    
    if(result.hasChildNodes()) {result.removeChild(result.firstChild)};

    if(playerSelection == 'rock' && computerSelection == 'scissor'){
        resultP.textContent = 'You win! Rock beats scissor.';
        playerScore += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        resultP.textContent = 'You win! Paper beats rock.';
        playerScore += 1;
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        resultP.textContent = 'You win! Scissor beats paper.';
        playerScore += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        resultP.textContent = 'You lose! Paper beats rock.';
        computerScore += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        resultP.textContent = 'You lose! Scissor beats paper.';
        computerScore += 1;
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        resultP.textContent = 'You lose! Rock beats scissor.';
        computerScore += 1;
    } else {
        resultP.textContent = 'Tie! You both picked ' + playerSelection;
    }

    result.appendChild(resultP);
}
  
function playGame() {
    let playerSelection = document.querySelector('#selection');

    playerSelection.addEventListener('click', (event) => {
        let selection = event.target;
        playRound(selection.id, getComputerChoice())
        console.log('Player score: '+playerScore+' Computer score: '+computerScore);
    });

    
    
}

console.log(playGame());