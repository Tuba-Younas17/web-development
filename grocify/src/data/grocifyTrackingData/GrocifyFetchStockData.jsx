import { grocifyStockInformation } from "../../utils/grocifyTrackingInformation/grocifyStockInformation";

export const fetchStock = async (setData, setLoading) => {
	setLoading(true);

	try {
		const result = await grocifyStockInformation();
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
				result.map((stock, index) => (
					<li key={index} className="py-2 border-b">
						{stock.name} - Catagory{" "}
						<strong>{stock.category}</strong> - Stock: {stock.stock}
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
