const Product = require('../model/product');

exports.addProduct = async function (req, res) {
    const product = await Product.findOne({ where: { name: req.body.name, user_id: req.userData.id } });

    if (product !== null) {
        return res.status(409).json({
            message: 'Product already exist'
        });
    } else {
        const { time_spent, profit_margin, itens } = req.body;

        let base_price = 0;
        for (const item of itens) {
            console.log(item)
            base_price += Number(item['0'].price) * Number(item['0'].usedQuantity);
        }

        const profit = req.userData.pricePerHour * time_spent + (((100 + profit_margin) * base_price) / 100) - base_price;

        const newProduct = {
            name: req.body.name,
            description: req.body.description,
            itens: itens,
            base_price: base_price.toFixed(2),
            product_price: (base_price + profit).toFixed(2),
            profit_margin: req.body.profit_margin.toFixed(2),
            profit: profit.toFixed(2),
            time_spent: time_spent,
            user_id: req.userData.id,
        };

        // Cria o produto
        await Product.create(newProduct)
            .then(result => {
                res.status(201).json({
                    messsage: 'Product created',
                    product: result.dataValues
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    err: err
                });
            });
    }
}

exports.updateProduct = async function (req, res) {
    console.log(req.body)
    const id = req.params.id;
    const { time_spent, profit_margin, description, name, itens } = req.body;

    let base_price = 0;
    for (const item of itens) {
        console.log(item)
        base_price += Number(item['0'].price) * Number(item['0'].usedQuantity);
    }

    const profit = req.userData.pricePerHour * time_spent + (((100 + profit_margin) * base_price) / 100) - base_price;


    Product.update(
        { 
            name: name, description: description, 
            itens: itens, profit: profit.toFixed(2), time_spent: time_spent,  
            base_price: base_price.toFixed(2), profit_margin: profit_margin.toFixed(2),
            product_price: (base_price + profit).toFixed(2)
        },
        { where: { id: id, user_id: req.userData.id } }
    )
        .then(result => {
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