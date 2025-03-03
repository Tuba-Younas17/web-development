export const sellerSalesTracking = (req, res) => {
    return res.json({
        success: true,
        data: [
            { id: 201, sellerName: "Fresh Farms", product: "Banana", quantitySold: 20, revenue: 50 },
            { id: 202, sellerName: "Dairy Delight", product: "Cheese", quantitySold: 15, revenue: 75 },
            { id: 203, sellerName: "Baker's Hub", product: "Whole Wheat Bread", quantitySold: 30, revenue: 90 }
        ]
    });
};
