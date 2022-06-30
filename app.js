
function displayGreeting() {
    alert("Hello! This popup 'Alert' is to demonstrate JavaScript working.\n\
Recently, I've been learning web development at Code Fellows.\n\
Click OK to continue.");
}

function confirmUserConsent(){
    const dialogueMsg = getdialogueMsg();
    return confirm(dialogueMsg);
}

function getRockPaperScissorsInput(){
    userInput = prompt("I'm thinking of one of the following:\n\
    1. Rock\n\
    2. Paper\n\
    3. Scissors\n\
I'll tell you my choice after you tell me yours. (Enter 1, 2, or 3.)\n\
Don't worry - I never cheat.");
    return parseInt(userInput);
}

function getdialogueMsg(){
    // There's only one confirmation message now, so just return this. 
    return "This is a 'Confirm' popup.\n\
If you'd like to play a quick game of Rock, Paper, Scissors:\n\
Please press OK, or press Cancel to go to my site.";
}

function decideGameResult(computerAction, userAction){
    // Returns string "win" "lose" "draw" or "noResult".
    // Parameters should have values 1, 2, 3 for Rock, Paper, Scissors.
    console.log("User action: " + userAction)


    // Invalid input returns "noResult".
    if (userAction !== 1 && userAction !== 2 && userAction !== 3){       
        return "noResult";
     }

    // Handle draw
    if (userAction === computerAction){
        return "draw"
    } 
    
    // Handle Rock beats Scissors, or 1 beats 3: the smaller value wins. 
    if (userAction + computerAction === 4){
        if (userAction === 1){
            return "win"
        } else{
            return "lose"
        }
    }            
    // Handle Paper beats Rock, Scissors beats Paper. Just compare, since 3 > 2 > 1.
    else if (userAction > computerAction) 
    {
        return "win"
    } else {
        return "lose";
    }
}

// This function's source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    //The min and max are both inclusive.
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function playGame(){

    const possibleActionNames = ["None", "Rock", "Paper", "Scissors"];

    let computerGameInput = getRandomIntInclusive(1,3);
    let userGameInput = getRockPaperScissorsInput();

    let gameResult = decideGameResult(computerGameInput, userGameInput)

    switch (gameResult){
        case "win": 
            alert("You chose " + possibleActionNames[userGameInput] + ".\n" + 
            "I was thinking of " + possibleActionNames[computerGameInput] + ".\n" +
            possibleActionNames[userGameInput] + " beats " + possibleActionNames[computerGameInput] + ".\n" +
            "You win!");
            updateScore(1);
            break;
        case "lose":
            alert("You chose " + possibleActionNames[userGameInput] + ".\n" +
            "I was thinking of " + possibleActionNames[computerGameInput] + ".\n" +
            possibleActionNames[computerGameInput] + " beats " + possibleActionNames[userGameInput] + ".\n" +
            "I win!");
            updateScore(-1);
            break;
        case "draw":
            alert("You chose " + possibleActionNames[userGameInput] + ".\n" +
            "I was thinking of " + possibleActionNames[computerGameInput] + ".\n" +
            possibleActionNames[computerGameInput] + " versus " + possibleActionNames[userGameInput] + ".\n" +
            "It's a tie!");
            break;
        default:
            alert("I didn't quite understand your choice.\n" + 
            "Maybe we'll play later.")
            break;
   }
}

function updateScore(scoreUpdate){
    switch(scoreUpdate){
        case -1:
            document.getElementById('compScore').innerHTML = ++compScore;
            break;
        case 0:
            break;
        case 1:
            document.getElementById('userScore').innerHTML = ++userScore;
            break;
        default:
            break;
    }
}

// Loading Script

displayGreeting();
let compScore = 0;
let userScore = 0;
let scoreUpdate = 0
let isPlayingGame = confirmUserConsent();
if (isPlayingGame){
    playGame();
}
