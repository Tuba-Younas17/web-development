import React, { useState, useEffect } from "react";
import SkeletonLoader from "../Layout/SkeletonLoader";
import { FetchWordMeaning } from "../../utils/FetchWordMeaning";

const Dictionary = () => {
	const [word, setWord] = useState("");
	const [data, setData] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [searchTrigger, setSearchTrigger] = useState(false); 


	useEffect(() => {
		if (searchTrigger) {
			FetchWordMeaning(word, setData, setError, setLoading);
			setSearchTrigger(false); 
		}
	}, [searchTrigger]);


	const handleSearch = () => {
		setSearchTrigger(true);
	};

	return (
		<div className="bg-zinc-200 flex items-center justify-center min-h-screen">
			<div className="bg-white font-black flex flex-col justify-start p-8 rounded-lg shadow-lg h-auto max-w-md">
				<div className="text-center mb-6">
					<input
						type="text"
						value={word}
						onChange={(e) => setWord(e.target.value)}
						placeholder="Search for a word"
						className="p-3 w-full text-black border-b-2 border-gray-400 rounded-md"
					/>
					<button
						onClick={handleSearch}
						className="mt-4 p-3 bg-blue-500 text-white rounded-md w-full"
					>
						Search
					</button>
				</div>

				{loading ? (
					<SkeletonLoader />
				) : error ? (
					<p style={{ color: "red" }}>Error: {error}</p>
				) : data ? (
					<div id="word-info" className="mt-6">
						<h2 className="text-lg text-gray-700">{data.word}</h2>
						<p className="text-gray-500">
							{data.meanings?.[0]?.definitions?.[0]?.definition ||
								"No definition found"}
						</p>
						{data.phonetics?.[0]?.audio && (
							<button
								onClick={() => {
									const audio = new Audio(
										data.phonetics[0].audio
									);
									audio.play();
								}}
								className="mt-2 p-2 bg-blue-500 text-white rounded-md"
							>
								🔊 Listen
							</button>
						)}
					</div>
				) : (
					<p className="text-gray-500">
						Enter a word and press search...
					</p>
				)}
			</div>
		</div>
	);
};

export default Dictionary;
