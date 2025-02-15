export const trackingWindowBuyers = (windowBuyers) => (req, res) => {
    res.json({
        success: true,
        message: "Window buyer browsing history",
        data: windowBuyers
    });
};

