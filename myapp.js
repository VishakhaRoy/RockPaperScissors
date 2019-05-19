//Variables

let playerScore = document.querySelector('#player-score');
let compScore = document.querySelector('#comp-score');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let weapons = ['rock','paper','scissors'];
let round = 1;
let roundCount =  document.querySelector('#round');
const score = [0,0];
let message = document.querySelector('.message');
let endGameBtn = document.querySelector('button');

endGameBtn.style.display = 'none';


//Returns Computer's Choice
const compChoice  = () => {
  let choice = weapons[Math.floor(Math.random() * weapons.length)];
  return choice;
}

//EventListeners

rock.addEventListener('click',() => {playRound('rock', compChoice());});
paper.addEventListener('click',() => {playRound('paper', compChoice());});
scissors.addEventListener('click',() => {playRound('scissors', compChoice());});
endGameBtn.addEventListener('click',clearAll);



//Function-1 Game Result
function playRound(playerSelection, compChoice){
    switch(playerSelection){
        case 'rock':
            if(compChoice === 'paper'){
                //disp.innerHTML = `Computer Chose: ${compChoice}`;
                message.textContent = "You lose! Paper beats Rock.";
                score[0]++;
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
                
            }
            else if(compChoice === 'scissors'){
                //disp.innerHTML = `Computer Chose: ${compChoice}`;
                message.textContent = "You win! Rock beats Scissors."; 
                score[1]++;
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            }
            else{
                //disp.innerHTML = `Computer Chose: ${compChoice}`;
                message.textContent = "Tie!"; 
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            }
        break;
            
        case 'paper':
            if(compChoice === 'rock'){
                //disp.innerHTML = `Computer Chose: ${compChoice}`;
                message.textContent = "You win! Paper beats Rock.";
                score[1]++;
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            }
            else if(compChoice === 'scissors'){
                //disp.innerHTML = `Computer Chose: ${compChoice}`;
                message.textContent = "You lose! Scissors beats Paper.";
                score[0]++;
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            }
            else{
                //disp.innerHTML = `Computer Chose: ${compChoice}`;
                message.textContent = "Tie!"; 
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`; 
            }
        break;
        
        case 'scissors':
            if(compChoice === 'paper'){
                //disp.innerHTML = `Computer Chose: ${compChoice}`;
                message.textContent = "You win! Scissors beats Paper.";
                score[1]++;
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            }
            else if(compChoice === 'rock'){
                //disp.innerHTML = `Computer Chose: ${compChoice}`;
                message.textContent = "You lose! Rock beats Scissors.";
                score[0]++;
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            }
            else{
                message.textContent = "Tie!"; 
                playerScore.textContent = `${score[1]}`;
                compScore.textContent = `${score[0]}`;
            }
        break;
    }
    round++;
    roundCount.textContent = `${round}`;
        if (round == 5) {
         endGame();
    }
}

//Function-2 EndGame Results

function endGame(){
    if(score[1]>score[0]){
        message.textContent = "You won!";
    }
    else if(score[0]>score[1]){
        message.textContent = "Game Over!";
    }
    else{
        message.textContent = "It's a tie";
    }
    endGameBtn.style.display ='block';
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}
//Function-3 Reset Game
function clearAll(){
    score[1] = 0;
    score[0] = 0;
    round = 1;
    message.textContent = '5 Rounds -- Choose Your Weapon!';
    playerScore.textContent = `${score[1]}`;
    compScore.textContent = `${score[0]}`;
    roundCount.textContent = `${round}`;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    endGameBtn.style.display = 'none';
}