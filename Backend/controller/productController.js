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

// exports.updateProduct = async function (req, res) {
//     const id = req.params.id;
//     const { description, used_quantity, itens_price, total_price } = req.body;

//     Product.update(
//         { description: description, used_quantity: used_quantity, itens_price: itens_price, total_price: total_price },
//         { where: { id: id } }
//     )
//     .then(result => {
//         console.log(result.dataValues);
//         return res.status(201).json({
//             message: 'Product updated'
//         });
//     })
//     .catch(err => {
//         return res.status(500).json({
//             err: err
//         });
//     });
// }

exports.updateProduct = async function (req, res) {
    const id = req.params.id;
    const { description, used_quantity, itens_price, total_price } = req.body;

    if(description && !used_quantity && !itens_price && !total_price){
        Product.update(
            { description: description },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product description updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else if(!description && used_quantity && !itens_price && !total_price){
        Product.update(
            { used_quantity: used_quantity },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product used_quantity updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else if(!description && !used_quantity && itens_price && !total_price){
        Product.update(
            { itens_price: itens_price },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product itens_price updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else if(!description && !used_quantity && !itens_price && total_price){
        Product.update(
            { total_price: total_price },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product total_price updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else if(description && used_quantity && !itens_price && !total_price){
        Product.update(
            { description: description, used_quantity: used_quantity },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product description and used_quantity updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else if(description && !used_quantity && itens_price && !total_price){
        Product.update(
            { description: description, itens_price: itens_price },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product description and itens_price updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else if(description && !used_quantity && !itens_price && total_price){
        Product.update(
            { description: description, total_price: total_price },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product description and total_price updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else if(!description && used_quantity && itens_price && !total_price){
        Product.update(
            { used_quantity: used_quantity, itens_price: itens_price },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product used_quantity and itens_price updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else if(!description && used_quantity && !itens_price && total_price){
        Product.update(
            { used_quantity: used_quantity, total_price: total_price },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product used_quantity and total_price updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else if(!description && !used_quantity && itens_price && total_price){
        Product.update(
            { itens_price: itens_price, total_price: total_price },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product itens_price and total_price updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else if(description && used_quantity && itens_price && !total_price){
        Product.update(
            { description: description, used_quantity: used_quantity, itens_price: itens_price },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product description, used_quantity and itens_price updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else if(description && used_quantity && !itens_price && total_price){
        Product.update(
            { description: description, used_quantity: used_quantity, total_price: total_price },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product description, used_quantity and total_price updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else if(description && !used_quantity && itens_price && total_price){
        Product.update(
            { description: description, itens_price: itens_price, total_price: total_price },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product description, itens_price and total_price updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else if(!description && used_quantity && itens_price && total_price){
        Product.update(
            { used_quantity: used_quantity, itens_price: itens_price, total_price: total_price },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product used_quantity, itens_price and total_price updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

    else {
        Product.update(
            { description: description, used_quantity: used_quantity, itens_price: itens_price, total_price: total_price },
            { where: { id: id }}
        )
        .then(result => {
            console.log(result.dataValues);
            return res.status(201).json({
                message: 'Product description, used_quantity, itens_price and total_price updated'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: err
            });
        });
    }

}