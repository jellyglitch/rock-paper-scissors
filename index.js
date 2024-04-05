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
    let player = playerSelection.toLowerCase();
    let result;

    if(player == 'rock' && computerSelection == 'scissor'){
        result = 'You win! Rock beats scissor.';
        playerScore += 1;
    } else if (player == 'paper' && computerSelection == 'rock') {
        result = 'You win! Paper beats rock.';
        playerScore += 1;
    } else if (player == 'scissor' && computerSelection == 'paper') {
        result = 'You win! Scissor beats paper.';
        playerScore += 1;
    } else if (player == 'rock' && computerSelection == 'paper') {
        result = 'You lose! Paper beats rock.';
        computerScore += 1;
    } else if (player == 'paper' && computerSelection == 'scissor') {
        result = 'You lose! Scissor beats paper.';
        computerScore += 1;
    } else if (player == 'scissor' && computerSelection == 'rock') {
        result = 'You lose! Rock beats scissor.';
        computerScore += 1;
    } else {
        result = 'Tie! You both picked ' + player;
    }
    
    console.log(result);
}
  
function playGame() {

    for(let round = 1; round <= 5; round++){
        playRound(prompt("What is you choice? (rock, paper, scissor)"), 
            getComputerChoice());

        console.log('Player score: '+playerScore+' Computer score: '+computerScore);
    }
}
  
console.log(playGame());