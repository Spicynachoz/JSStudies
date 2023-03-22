let playerScore = 0;
let computerScore = 0;
//Array of possible choices
let gameChoices = ['Rock','Paper','Scissor']

// user input and convert to lower case
let playerSelection = prompt("User selection!");
playerSelection = playerSelection.toLowerCase();

let computerSelection = getComputerChoice();

// get computer
function getComputerChoice(){

return(gameChoices[(Math.random() * gameChoices.length) | 0].toLowerCase());

}


function playRound(playerSelection,computerSelection){

    getComputerChoice();
    // check for rock vs Computer selection
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            console.log("its a tie!") ;
        }
        else if ( computerSelection == "paper"){
            console.log("you lost! paper beats rock");
            computerScore = computerScore+1;
        }
        else if (computerSelection == "scissor"){
            console.log("you won! rock beats scissor");
            playerScore = playerScore+1;
        }


            
    }
        // check for paper vs Computer selection
    else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            console.log("you win! Paper beats rock") ;
            playerScore = playerScore+1;
        }
        else if ( computerSelection == "paper"){
            console.log("It's a Tie");
        }
        else if (computerSelection == "scissor"){
            console.log("You lost. Scissor beats paper");
            computerScore = computerScore+1;
        }


    }
    
        // check for Scissor vs Computer selection
    else if(playerSelection == "scissor"){
        if(computerSelection == "rock"){
            console.log("you lose! rock beats scissor") ;
            computerScore = computerScore+1;
        }
        else if ( computerSelection == "paper"){
            console.log("you win! Scissor beats paper");
            playerScore = playerScore +1 ;
        }
        else if (computerSelection == "scissor"){

            console.log("its a tie!");
        }


    }
    
    


}

function game(){
    playRound(playerSelection,computerSelection);
    playRound(playerSelection,computerSelection);
    playRound(playerSelection,computerSelection);
    playRound(playerSelection,computerSelection);
    playRound(playerSelection,computerSelection);


}




console.log(playerSelection + " " + computerSelection);
playRound(playerSelection,computerSelection);
console.log ("Player Score : "+ playerScore + " " + "Computer Score : " + computerScore);
//game();