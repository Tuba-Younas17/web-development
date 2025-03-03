export const buyerOrderTracking = (req, res) => {
    return res.json({
        success: true,
        data: [
            { id: 101, buyerName: "John Doe", product: "Apple", quantity: 5, status: "Delivered" },
            { id: 102, buyerName: "Alice Smith", product: "Milk", quantity: 2, status: "Processing" },
            { id: 103, buyerName: "Michael Brown", product: "Bread", quantity: 1, status: "Shipped" }
        ]
    });
};
