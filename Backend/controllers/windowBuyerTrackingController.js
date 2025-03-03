export const windowBuyerTracking = (req, res) => {
    return res.json({
        success: true,
        data: [
            { id: 301, name: "John Doe", browsedProducts: ["Oranges", "Eggs", "Butter"], lastVisited: "2025-02-14" },
            { id: 302, name: "Jane Smith", browsedProducts: ["Tomatoes", "Milk", "Yogurt"], lastVisited: "2025-02-13" },
            { id: 303, name: "Mike Johnson", browsedProducts: ["Rice", "Pasta", "Flour"], lastVisited: "2025-02-12" }
        ]
    });
};
