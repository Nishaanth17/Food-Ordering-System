const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/OrderData', async (req, res) => {
    let data = req.body.order_data;
    data.splice(0, 0, { Order_date: req.body.order_date });

    try {
        let eId = await Order.findOne({ email: req.body.email });
        console.log(eId);
        
        if (!eId) {
            // Create a new order if the email does not exist
            await Order.create({
                email: req.body.email,
                order_data: [data]
            });
            res.json({ success: true });
        } else {
            // Update the existing order if the email exists
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: data } }
            );
            res.json({ success: true });
        }
    } catch (error) {
        console.error("Server Error:", error.message);
        res.status(500).send({ error: "Server Error", message: error.message });
    }
});

router.post('/myorderData', async (req, res) => {
    try{
        let myData = await Order.findOne({'email':req.body.email})
        res.json({orderData:myData})  
    }catch(error){
        res.send("Server Error", error.message)
    }
})
module.exports = router;
