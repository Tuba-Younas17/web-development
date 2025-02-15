export const trackingSales = (sales) =>(req,res) =>{
    res.json({
        success: true,
        message: "Seller sales details",
        data: sales
    });
};
