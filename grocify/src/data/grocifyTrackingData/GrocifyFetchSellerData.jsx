import { grocifySellerInformation } from "../../utils/grocifyTrackingInformation/grocifySellerInformation";

export const fetchSellers = async (setData, setLoading) => {
	setLoading(true);

	try {
		const result = await grocifySellerInformation();
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
				result.map((seller, index) => (
					<li key={index} className="py-2 border-b">
						{seller.sellerName} product{" "}
						<strong>{seller.product}</strong> - Quantity:{" "}
						{seller.quantitySold}, Revenue: {seller.revenue}
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
