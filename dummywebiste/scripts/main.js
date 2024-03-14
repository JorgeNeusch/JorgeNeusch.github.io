function checkGuess() {
    var guessInput = document.getElementById("guessInput");
    var guess = parseInt(guessInput.value);
    var message = document.getElementById("message");
    var linkContainer = document.getElementById("linkContainer");
    
    if (isNaN(guess)) {
        message.textContent = "Please enter a valid number.";
        return;
    }

    if (guess === CORRECT_NUMBER) {
        message.textContent = "Congratulations! You guessed it right!";
        linkContainer.style.display = "block"; // Show the link
    } else if (guess < CORRECT_NUMBER) {
        message.textContent = "Try a higher number.";
    } else {
        message.textContent = "Try a lower number.";
    }
}


const CORRECT_NUMBER = 2002;