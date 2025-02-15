export const trackingOrders = (orders)  =>(req, res,) =>{
    res.json({
        message: "Buyer order details",
        data: orders
    });
};
