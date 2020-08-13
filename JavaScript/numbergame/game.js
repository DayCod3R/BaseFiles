var secretNumber = 21;

var guess = Number(prompt("Guess a number."));
// OR var guess = Number(stringGuess);

//if correct
if(guess === secretNumber) {
	alert("You got it right!");
}

//if incorrect
/*else if(guess != secretNumber) {
	alert("You a BITCH. GTFOH. WHY WOULD YOU GUESS WRONG?!FUCK YOU.");
}
*/
//guess is higher
else if(guess > secretNumber) {
	alert("Too high!");
}
//guess is lower
else if(guess < secretNumber) {
	alert("Too low.");
}