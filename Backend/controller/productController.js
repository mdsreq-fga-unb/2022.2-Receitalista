const Item = require('../model/item');
const Product = require('../model/product');

exports.addProduct = async function (req, res) {
    console.log(req.body);
    Product.findOne({ where: { name: req.body.name } })
        .then(product => {
            console.log()
            if (product !== null) {
                return res.status(409).json({
                    message: 'Product already exist'
                });
            } else {
                const newProduct = {
                    name: req.body.name,
                    used_quantity: req.body.used_quantity,
                    itens_price: req.body.itens_price,
                    total_price: req.body.total_price
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