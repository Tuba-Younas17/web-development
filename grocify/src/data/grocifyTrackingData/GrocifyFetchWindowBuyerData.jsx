import { grocifyWindowBuyerInformation } from "../../utils/grocifyTrackingInformation/GrocifyWindowBuyerInformation";

export const fetchWindowBuyers = async (setData, setLoading) => {
	setLoading(true);

	try {
		const result = await grocifyWindowBuyerInformation();
		setLoading(false);

		if (!result || result.error) {
			setData(
				<li key="error" className="text-red-500">
					{result?.error || "Failed to load buyer data."}
				</li>
			);
			return;
		}

		if (Array.isArray(result)) {
			setData(
				result.map((buyer, index) => (
					<li key={index} className="py-2 border-b">
						{buyer.name} - BrowsedProducts{" "}
						<strong>{buyer.browsedProducts}</strong> - Last Visted:{" "}
						{buyer.lastVisited}
					</li>
				))
			);
		} else {
			setData(
				<li key="invalid" className="text-red-500">
					Invalid data format received.
				</li>
			);
		}
	} catch (error) {
		setLoading(false);
		console.error("Error fetching buyers:", error);
		setData(
			<li key="error-fetch" className="text-red-500">
				An error occurred while fetching data.
			</li>
		);
	}
};
