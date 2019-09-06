//List array of computer choices 
var computerChoices = ["b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


//Creating variables to hold the starting number of wins, losses, and guesses left as well as user guesses for that round
var wins = 0;
var losses = 0; 
var guesses = 9;
var userGuesses = [];

//Creating variables to hold reference places in the HTML elements we need to manipulate. 
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var currentGuessesText = document.getElementById("currentguesses-text");


function emptyArray () {
    userGuesses.clear();
}

function letterGenerator () {

directionsText.textContent = "";    
//Computer generates random letter from the alphabet
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)

var guesses = 9;


document.onkeyup = function (event) {
    var userGuess = event.key;

    userGuesses.push(userGuess);
    console.log(userGuesses);
    console.log(userGuess);
    currentGuessesText.textContent = "Your current guesses: " + " " + userGuesses + " ";
 
    if (userGuess === computerGuess) {
        wins++;
        letterGenerator();
        userGuesses.length = 0;
        currentGuessesText.textContent = "Your current guess: WAS CORRECT!";
    }
    else {
            if (userGuesses.length < 9) {
                guesses--;

            }
            else if(userGuesses.length === 9) {
                losses++;
                userGuesses.length = 0;
                currentGuessesText.textContent = "Your current guesses: ";
                letterGenerator();
                
            }
        }              


        
                    



     
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses; 
    guessesLeftText.textContent = "Guesses Left: " + guesses;

    if (wins === 10) {
    
    directionsText.textContent = "";
    winsText.textContent = "";
    lossesText.textContent = "";
    guessesLeftText.textContent = ""; 
    currentGuessesText.textContent = "Press any key to play again..."
    wins = 0;
    losses = 0; 
    guesses = 9;
    letterGenerator();
}
else if (losses === 10) {
    directionsText.textContent = "Nice try human. You Lose.";
    winsText.textContent = "";
    lossesText.textContent = "";
    guessesLeftText.textContent = ""; 

    currentGuessesText.textContent = "Press any key to play again..."
    letterGenerator();
}

}

}

letterGenerator ();



//User generates guess by pressing a key 

//if computer guess === user guess then increase wins by one
//else user guesses again, previous guess added to screen, guesses left decreases by one
//until 10 guesses, losses increases by one 

//continue function until 10 wins or 10 losses is reached (reset function)