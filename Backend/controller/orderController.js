const Order = require('../model/order');

exports.addOrder = async function(req, res) {
    const newOrder = {
        user_id: req.userData.id,
        client_id: req.body.client_id, 
        product_id: req.body.client_id, 
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

exports.deleteOrder = async function (req, res) {
    const id = req.params.id;
    Order.destroy(
        { where: { id: id, user_id: req.userData.id } }
    )
        .then(result => {
            console.log(result.dataValues);
            res.status(201).json({
                message: 'Order deleted'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: err
            })
        });
}

exports.updateOrder = async function(req, res) {
    const id = req.params.id;
    const { price } = req.body;

    Order.update({ total_price: price }, { where: { id: id, user_id: req.userData.id }})
        .then(result => {
            console.log(result.dataValues);
            res.status(201).json({
                message: "Order updated"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: err
            });
        });
}

exports.getAllOrders = async function(req, res) {
     Order.findAll({ where: { user_id: req.userData.id }})
        .then(orders => {
            console.log(result.dataValues);
            res.status(201).json({
                order: orders
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: err
            });
        })
}