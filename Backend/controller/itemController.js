const Item = require('../model/item');

exports.getAllItem = async function (req, res) {
    Item.findAll({ where: { user_id: req.userData.id } })
        .then(item => {
            return res.status(200).json({
                item: item
            });
        })
        .catch(err => {
            return res.status(500).json({
                err: err
            });
        });
}

exports.getItem = async function (req, res) {
    const id = req.params.id;
    Item.findOne({ where: { id: id, user_id: req.userData.id } })
        .then(item => {
            return res.status(200).json({
                item: item
            });
        })
        .catch(err => {
            return res.status(500).json({
                err: err
            });
        });
}

exports.addItem = async function (req, res) {

    console.log(req.body);
    Item.findOne({
        where:
        {
            name: req.body.name,
            user_id: req.userData.id
        }
    })
        .then(item => {
            console.log()
            if (item !== null) {
                return res.status(409).json({
                    message: 'Item already exist'
                });
            } else {
                const newItem = {
                    name: req.body.name,
                    price: req.body.price,
                    quantity: req.body.quantity,
                    unit: req.body.unit,
                    user_id: req.userData.id
                };

                Item.create(newItem)
                    .then(result => {
                        console.log(result.dataValues);
                        res.status(201).json({
                            messsage: 'Item created'
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            err: err
                        });
                    });
            }
        })
}

exports.updateItem = async function (req, res) {
    const id = req.params.id;
    const { quantity, price } = req.body;

    Item.update(
        { price: price, quantity: quantity },
        { where: { id: id, user_id: req.userData.id } }
    )
        .then(result => {
            console.log(result.dataValues);
            res.status(201).json({
                message: 'Item price and quantity updated'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: err
            })
        });
}

exports.deleteItem = async function (req, res) {
    const id = req.params.id;
    Item.destroy(
        { where: { id: id, user_id: req.userData.id } }
    )
        .then(result => {
            console.log(result.dataValues);
            res.status(201).json({
                message: 'Item deleted'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: err
            })
        });
}