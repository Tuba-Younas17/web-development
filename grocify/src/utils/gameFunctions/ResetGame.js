export const resetGame = (
	setRandomNumber,
	setGuessCount,
	setMessage,
	setGameOver,
	setUserValue
) => {
	setRandomNumber(Math.floor(Math.random() * 100) + 1);
	setGuessCount(0);
	setMessage("Enter a number between 1-100");
	setGameOver(false);
	setUserValue("");
};
