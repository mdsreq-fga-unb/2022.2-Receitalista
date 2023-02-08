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
                const { time_spent, profit_margin, base_price } = req.body;

                const profit = req.userData.price_per_hour * time_spent + (((100 + profit_margin) * base_price) / 100) - base_price;

                const newProduct = {
                    name: req.body.name,
                    description: req.body.description,
                    itens: req.body.itens,
                    base_price: base_price,
                    product_price: base_price + profit,
                    profit_margin: req.body.profit_margin,
                    profit: profit,
                    time_spent: time_spent,
                    user_id: req.userData.id,
                };

                // Cria o produto
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
    const { description, name, itens } = req.body;

    Product.update(
        { name: name, description: description, itens: itens },
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

exports.deleteProduct = async function (req, res) {
    const id = req.params.id;
    Product.destroy(
        { where: { id: id, user_id: req.userData.id } }
    )
        .then(result => {
            console.log(result.dataValues);
            res.status(201).json({
                message: 'Product deleted'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: err
            })
        });
}