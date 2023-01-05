const Product = require('../model/product');

exports.addProduct = async function (req, res) {
    console.log(req.body);
    Product.findOne({ where: { name: req.body.name, user_id: req.userData.id } })
        .then(product => {
            console.log()
            if (product !== null) {
                return res.status(409).json({
                    message: 'Product already exist'
                });
            } else {
                const newProduct = {
                    name: req.body.name,
                    description: req.body.description,
                    used_quantity: req.body.used_quantity,
                    itens_price: req.body.itens_price,
                    total_price: req.body.total_price,
                    user_id: req.userData.id,
                    itens_id: req.body.itens_id
                };

                Product.create(newProduct)
                    .then(result => {
                        console.log(result.dataValues);
                        res.status(201).json({
                            messsage: 'Product created'
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

exports.updateProduct = async function (req, res) {
    const id = req.params.id;
    const { description, used_quantity, itens_price, total_price, item_id } = req.body;

    Product.update(
        { description: description, used_quantity: used_quantity, itens_price: itens_price, total_price: total_price, itens_id: item_id },
        { where: { id: id, user_id: req.userData.id } }
    )
    .then(result => {
        console.log(result.dataValues);
        return res.status(201).json({
            message: 'Product updated'
        });
    })
    .catch(err => {
        return res.status(500).json({
            err: err
        });
    });
}

exports.getAllProducts = async function (req, res) {
    Product.findAll({ where: { user_id: req.userData.id } })
        .then(product => {
            return res.status(200).json({
                product: product
            });
        })
        .catch(err => {
            return res.status(500).json({
                err: err
            });
        });
}

exports.getAllProducts = async function (req, res) {
    Product.findAll({ where: { user_id: req.userData.id } })
        .then(product => {
            return res.status(200).json({
                products: product
            });
        })
        .catch(err => {
            return res.status(500).json({
                err: err
            });
        });
}

exports.getProduct = async function (req, res) {
    const id = req.params.id;
    Product.findOne({ where: { id: id, user_id: req.userData.id } })
        .then(product => {
            return res.status(200).json({
                product: product
            });
        })
        .catch(err => {
            return res.status(500).json({
                err: err
            });
        });
}