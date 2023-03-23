let playerScore = 0;
let computerScore = 0;
//Array of possible computer choices
let gameChoices = ['Rock','Paper','Scissor']

// function to get computer choice
function getComputerChoice(){

return(gameChoices[(Math.random() * gameChoices.length) | 0].toLowerCase());

}


function playRound(playerSelection,computerSelection){

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
    
    console.log("Player Score :" + " " +playerScore + " " + "Computer Score" + " " + computerScore);


}

function game(){
    
    for(let i = 0; i<5; i++){ // for loop for 5 games

        // grab new player & computer choice every iteration
        //grab user choice from prompt, convert input to lowercase
        let playerSelection = prompt("User selection!");
        playerSelection = playerSelection.toLowerCase();
        
        let computerSelection = getComputerChoice();

        //run playRound function to compare Player & Computer choice
        playRound(playerSelection,computerSelection);
    }

        // if/else to output the winner
    if(playerScore > computerScore)
    {
        console.log("Congrats! Player won!");
    }
    else{

        console.log("Booooooo, Computer won!");
    }


}




//console.log(playerSelection + " " + computerSelection);
//playRound(playerSelection,computerSelection);
//console.log ("Player Score : "+ playerScore + " " + "Computer Score : " + computerScore);
game();