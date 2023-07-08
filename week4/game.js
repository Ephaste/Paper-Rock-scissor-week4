
let computerGameCount=0;
let manGameCount=0;
function getComputerChoice() {
    randomGameValue = Math.floor(Math.random() * 3);
    if (randomGameValue == "0") {
        return "rock";
    }
    else if (randomGameValue == "1") {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection){
    {
const playerGame=playerSelection.toLowerCase();
const computerGame=getComputerChoice();

if(computerGame=="rock"){
    if(playerGame=="rock"){
        return "Tie!";
    }
    else if(playerGame=="scissor"){
        //computerGameCount++;
        return "Fail, Rock hit scissor";
    }
    else if(playerGame== "paper"){
        return "You won! paper cover the rock";
        //manGameCount++;
    }
}
else if(computerGame=="scissor"){

if(playerGame=="rock"){
    return "You won! rock crush scissor";
    //manGameCount++;
}
else if(playerGame=="scissor"){
    return "Tie";
}
else if(playerGame== "paper"){
    return "Fail scissor cut the paper";
    //computerGameCount++;
}
}
else if(computerGame=="paper"){
    if(playerGame=="rock"){
        return "Fail! paper cover the Rock";
        //computerGameCount++;
    }
    else if(playerGame=="scissor"){
        return "You won scissor can cut the paper";
        //manGameCount++;
    }
    else if(playerGame== "paper"){
        return "Tie";
    } 
}
 }
}


function game(){
    
    for(let i=0; i<=5; i++){
       
        
        function playRound(playerSelection, computerSelection){
            {


        const playerGame=playerSelection.toLowerCase();
        const computerGame=getComputerChoice();
        
        if(computerGame=="rock"){
            if(playerGame=="rock"){
                console.log("Tie!");
            }
            else if(playerGame=="scissor"){
                computerGameCount++;
                console.log("Fail, Rock hit scissor");
            }
            else if(playerGame== "paper"){
                manGameCount++;
                console.log("You won! paper cover the rock");
                
            }
        }
        else if(computerGame=="scissor"){
        
        if(playerGame=="rock"){
            manGameCount++;
            console.log ("You won! rock crush scissor");
            
        }
        else if(playerGame=="scissor"){
            console.log("Tie");
        }
        else if(playerGame== "paper"){
            computerGameCount++;
            console.log("Fail scissor cut the paper");
            
        }
        }
        else if(computerGame=="paper"){
            if(playerGame=="rock"){
                console.log("Fail! paper cover the Rock");
                computerGameCount++;
            }
            else if(playerGame=="scissor"){
                console.log("You won scissor can cut the paper");
                manGameCount++;
            }
            else if(playerGame== "paper"){
                console.log("Tie");
            } 
        }
         }
        }

        if(manGameCount<computerGameCount){
                       console.log("SOORY! you can try again");
                    }
                    else if(manGameCount>computerGameCount){
             console.log("congrats you WON!");
                   }


    } 
    const playerSelection = prompt("Enter the choice");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}
game();
 