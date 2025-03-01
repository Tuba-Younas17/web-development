export const checkGuess = (
	value,
	randomNumber,
	guessCount,
	setGuessCount,
	setMessage,
	setGameOver,
	setUserValue
) => {
	if (isNaN(value) || value < 1 || value > 100) {
		alert("Please enter a valid number between 1 and 100");
		return;
	}

	setGuessCount(guessCount + 1);

	if (value === randomNumber) {
		setMessage(
			`🎉 Congratulations! You guessed it right in ${
				guessCount + 1
			} attempts!`
		);
		setGameOver(true);
	} else if (value < randomNumber) {
		setMessage("📉 Too Low! Try Again!");
	} else {
		setMessage("📈 Too High! Try Again!");
	}

	setUserValue(""); // Clear input field
};
