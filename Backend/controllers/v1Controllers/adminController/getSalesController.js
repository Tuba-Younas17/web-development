export const getProductsController = (req, res) => {
    return res.json({
        success: true,
        data: [
            { id: 1, name: "Apple", category: "Fruits", stock: 100 },
            { id: 2, name: "Milk", category: "Dairy", stock: 50 },
            { id: 3, name: "Bread", category: "Bakery", stock: 30 },
            { id: 4, name: "Rice", category: "Grocery", stock: 75 }
        ]
    });
};
