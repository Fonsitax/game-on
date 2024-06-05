const choices = ["rock","paper","scissors"];
const yourDisplay = document.getElementById("yourDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore =0;
let computerScore =0;

function play(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
   
    console.log(computerChoice);
    let result = "";

    if(playerChoice === computerChoice){
        result = "It is a tie!";
    } else {
        switch(playerChoice){
               case "rock":
               result = (computerChoice === "scissors") ? "You win!" : "You lose";
               break;
               case "paper":
               result = (computerChoice === "rock") ? "You win!" : "You lose";
               break;
               case "scissors":
               result = (computerChoice === "paper") ? "You win!" : "You lose";
               break;
        }
    }
    yourDisplay.textContent = `You: ${playerChoice}`;
    computerDisplay.textContent = `Your Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText");

    switch(result){
        case "You win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}

