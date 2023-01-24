const Client = require('../model/client');
const Order = require('../model/order');

exports.getAllClients = async function (req, res) {
    Client.findAll({ where: { user_id: req.userData.id } })
        .then(client => {
            return res.status(200).json({
                client: client
            });
        })
        .catch(err => {
            return res.status(500).json({
                err: err
            });
        });
}

exports.addClient = async function (req, res) {

    console.log(req.body);
    Client.findOne({
        where:
        {
            name: req.body.name,
            user_id: req.userData.id
        }
    })
        .then(client => {
            console.log()
            if (client !== null) {
                return res.status(409).json({
                    message: 'Client already exist'
                });
            } else {
                const newClient = {
                    name: req.body.name,
                    phone: req.body.phone,
                    user_id: req.userData.id
                };

                Client.create(newClient)
                    .then(result => {
                        console.log(result.dataValues);
                        res.status(201).json({
                            messsage: 'Client created'
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

exports.updateClient = async function (req, res) {
    const id = req.params.id;
    const { name, email } = req.body;

    Client.update(
        { name: name, email: email },
        { where: { id: id, user_id: req.userData.id } }
    )
        .then(result => {
            console.log(result.dataValues);
            res.status(201).json({
                message: 'Client updated'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: err
            })
        });
}

exports.deleteClient = async function (req, res) {
    const id = req.params.id;

    try {
        const order = await Order.findAll( { where: { client_id: id, user_id: req.userData.id } } );

        if (order === null) {
            Client.destroy(
                { where: { id: id, user_id: req.userData.id } }
            )
                .then(result => {
                    console.log(result.dataValues);
                    res.status(201).json({
                        message: 'Client deleted'
                    })
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        err: err
                    })
                });
        }

        res.status(500).json({
            message: 'Client not deleted, becuse already has an order'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: err
        });
    }
}