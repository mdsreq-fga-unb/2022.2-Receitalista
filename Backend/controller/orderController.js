const Order = require('../model/order');

exports.addOrder = async function (req, res) {
    const newOrder = {
        user_id: req.userData.id,
        client_id: req.body.client_id,
        product_id: req.body.client_id,
        total_price: req.body.total_price,
        date: req.body.date
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
                err: err
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

exports.updateOrder = async function (req, res) {
    const id = req.params.id;
    const { client_id, product_id, total_price } = req.body;

    console.log(client_id, product_id, total_price);

    Order.update({ client_id: client_id, product_id: product_id, total_price: total_price }, { where: { id: id, user_id: req.userData.id } })
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

exports.getAllOrders = async function (req, res) {
    Order.findAll({ where: { user_id: req.userData.id } })
        .then(orders => {
            res.status(201).json({
                orders: orders
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: err
            });
        })
}

exports.getOrder = async function (req, res) {
    const id = req.params.id;
    Order.findOne({ where: { id: id, user_id: req.userData.id } })
        .then(orders => {
            res.status(201).json({
                orders: orders
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: err
            });
        })
}

exports.getReport = async function (req, res) {
    Order.findAll({ where: { user_id: req.userData.id, date: req.body.date } })
        .then(orders => {
            let csv = '';

            // Get the headers (keys of the first object in the JSON array)
            const headers = Object.keys(orders[0]);

            // Add headers to the CSV string
            csv += headers.join(',') + '\n';

            // Loop through each object in the JSON array
            orders.forEach(function (row) {
                // Loop through each header and add the corresponding value for the current object
                headers.forEach(function (header, index) {
                    csv += row[header];
                    if (index < headers.length - 1) {
                        csv += ',';
                    }
                });

                csv += '\n';
            });

            res.status(201).json({
                csv: csv
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: err
            });
        })
}