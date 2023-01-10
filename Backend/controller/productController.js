const Product = require('../model/product');
const Item = require('../model/item');

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
                    total_price: req.body.total_price,
                    user_id: req.userData.id,
                    itens: req.body.itens
                };

                // Cria o produto
                Product.create(newProduct)
                    .then(result => {
                        // Atualzia a aquantidae disponivel do item apos utilizar ele no produto
                        for (const item of newProduct.itens) {
                            console.log(item);
                            const quantity = item.quantity - item.used_quantity;
                            Item.update(
                                { quantity: quantity },
                                { where: { id: item.id, user_id: req.userData.id } }
                            )
                                .then(r => {
                                    console.log(`Quantidades do item ${item.name} atualizada para ${quantity}`);
                                })
                                .catch(item_err => {
                                    console.log(item_err);
                                });
                        }

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