function getCompuerChoice() {
    let int = Math.floor(Math.random() * 3)
    if (int === 0){
        return "rock"
    }
    else if (int === 1){
        return "paper"
    }
    else if (int === 2){
        return "scissors"
    }
}
function getHumanChoice(){
    return (prompt("Chose ROCK PAPER SCISSORS")).toLowerCase();
}

playGame();

function playRound(humanScore, computerScore){
    let draw = false;
    while (draw === false){
        draw = false;
        let computerChoice = getCompuerChoice()
        let humanChoice = getHumanChoice()
        console.log("Computer choice is " + computerChoice + " and human choice is " + humanChoice);
        if(humanChoice === "rock"){
            if (computerChoice != "rock"){
                draw = true;
                if(computerChoice === "paper"){
                    return 0;
                }
                else{
                    return 1;
                }
            }
            else{
                console.log("round is draw, round is happening again")
            }
        }
        else if(humanChoice === "paper"){
            if (computerChoice != "paper"){
                draw = true;
                if(computerChoice === "rock"){
                    return 1;
                }
                else{
                    return 0;
                }
            }
            else{
                console.log("round is draw, round is happening again")
            }
        }
        else if(humanChoice === "scissors"){
            if (computerChoice != "scissors"){
                draw = true;
                if(computerChoice === "rock"){
                    return 0;
                }
                else{
                    return 1;
                }
            }
            else{
                console.log("round is draw, round is happening again")
            }
        }   
    } 
}

function playGame(){
    let times = prompt("How many rounds you tryna play");
    let humanScore = 0
    let computerScore = 0
    for (let i = 0; i < times; i++) {
        let x = playRound(humanScore, computerScore);
        if (x === 1){
            humanScore++;
            console.log("Human won this round");
        }
        else {
            computerScore++;
            console.log("Computer won this round");
        }
    }

    console.log("The human score is " + humanScore + " and the computer score is " + computerScore)
}