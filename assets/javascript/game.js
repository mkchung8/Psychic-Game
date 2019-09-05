//List array of computer choices 
var computerChoices = ["b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


//Creating variables to hold the starting number of wins, losses, and gueses left
var wins = 0;
var losses = 0; 
var guesses = 9;

//Creating variables to hold reference places in the HTML elements we need to manipulate. 
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var currentGuessesText = document.getElementById("current-guesses-text");

//Computer generates random letter from the alphabet
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)
//Run function when uses presses the key
document.onkeyup = function (event) {
    var userGuess = event.key
    console.log(userGuess);

    if (computerGuess === userGuess) {
        wins++;
        guesses--;
        
    }
    else {
        guesses--;
    }

    if (guesses === 0){ 
        losses++;
        return;

    }

    if (wins === 10) {
        alert("you won!");
    }
  
    directionsText.textContent= "";
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses; 
    guessesLeftText.textContent = "Guesses Left: " + guesses;
}
//User generates guess by pressing a key 

//if computer guess === user guess then increase wins by one
//else user guesses again, previous guess added to screen, guesses left decreases by one
//until 10 guesses, losses increases by one 

//continue function until 10 wins or 10 losses is reached (reset function)
</script>