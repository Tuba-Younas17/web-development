import React, { useState } from "react";
import { generateRandomNumber } from "../../utils/gameFunctions/GenerateRandomNumber";
import { checkGuess } from "../../utils/gameFunctions/GameLogic";
import { resetGame } from "../../utils/gameFunctions/ResetGame";

const Game = () => {
	// State variables
	const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
	const [userValue, setUserValue] = useState("");
	const [guessCount, setGuessCount] = useState(0);
	const [message, setMessage] = useState("Enter a number between 1-100");
    const [gameOver, setGameOver] = useState(false);
    // console.log(randomNumber);

	// Function to generate a random number
	// function generateRandomNumber() {
	// 	return Math.floor(Math.random() * 100) + 1;
    // }
    // const generateRandomNumber = () => {
    //     return Math.floor(Math.random() * 100) + 1;
    // }
	// Function to handle user input
	const handleChange = (e) => {
		setUserValue(e.target.value);
    };
      const handleGuess = (e) => {
			e.preventDefault();
			checkGuess(
				parseInt(userValue),
				randomNumber,
				guessCount,
				setGuessCount,
				setMessage,
				setGameOver,
				setUserValue
			);
		};

	// Function to check the guess
	// const handleGuess = (e) => {
	// 	e.preventDefault();
	// 	const value = parseInt(userValue);

	// 	if (isNaN(value) || value < 1 || value > 100) {
	// 		alert("Please enter a valid number between 1 and 100");
	// 		return;
	// 	}

	// 	setGuessCount(guessCount + 1);

	// 	if (value === randomNumber) {
	// 		setMessage(
	// 			`🎉 Congratulations! You guessed it right in ${
	// 				guessCount + 1
	// 			} attempts!`
	// 		);
	// 		setGameOver(true);
	// 	} else if (value < randomNumber) {
	// 		setMessage("📉 Too Low! Try Again!");
	// 	} else {
	// 		setMessage("📈 Too High! Try Again!");
	// 	}

	// 	setUserValue(""); // Clear input field
	// };

	// Function to reset the game
	// const resetGame = () => {
	// 	setRandomNumber(generateRandomNumber());
	// 	setGuessCount(0);
	// 	setMessage("Enter a number between 1-100");
	// 	setGameOver(false);
	// 	setUserValue("");
    // };
    const handleReset = () => {
		resetGame(
			setRandomNumber,
			setGuessCount,
			setMessage,
			setGameOver,
			setUserValue
		);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-[url('https://png.pngtree.com/background/20210716/original/pngtree-gaming-digital-futuristic-background-with-hud-ui-interface-picture-image_1404893.jpg')] bg-center bg-cover px-5 py-5">
			<div className="w-[90%] max-w-[400px] h-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
				<h1 className="text-lg font-semibold text-center">{message}</h1>
				<form
					className="w-full flex flex-col items-center mt-4"
					onSubmit={handleGuess}
				>
					<input
						type="text"
						className="border rounded border-gray-600 px-3 py-2 w-full text-center"
						placeholder="Enter a number"
						value={userValue}
						onChange={handleChange}
						disabled={gameOver}
					/>
					<button
						className={`border rounded px-4 py-2 w-full font-semibold ${
							gameOver
								? "bg-gray-500 cursor-not-allowed"
								: "bg-green-800 text-white"
						}`}
						type="submit"
						disabled={gameOver}
					>
						{gameOver ? "Game Over" : "Click to Start the Game"}
					</button>
					{gameOver && (
						<button
							className="border rounded border-gray-600 mt-3 px-4 py-2 bg-yellow-500 w-full font-semibold"
							onClick={handleReset}
						>
							Play Again
						</button>
					)}
				</form>
			</div>
		</div>
	);
};

export default Game;
