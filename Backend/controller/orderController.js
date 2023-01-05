const Order = require('../model/order');

exports.addOrder = async function(req, res) {
    const newOrder = {
        user_id: req.dataValues.id,
        client_id: req.body.client_id, 
        total_price: req.body.total_price
    };

    Order.create(newOrder)
    .then(result => {
        console.log(result.dataValues);
        return res.status(201).json({
            message: 'Order created'
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            err:err
        })
    });
}