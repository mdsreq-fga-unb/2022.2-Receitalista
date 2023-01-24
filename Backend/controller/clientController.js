const Client = require('../model/client');

exports.addClient = async function (req, res) {

    console.log(req.body);
    Client.findOne({
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

exports.deleteClient = async function (req, res) {
    const id = req.params.id;
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