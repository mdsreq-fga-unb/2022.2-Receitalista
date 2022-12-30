const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/user');

exports.userSignUp = async function (req, res) {
    console.log(req.body);
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            console.log()
            if (user !== null) {
                return res.status(409).json({
                    message: 'User already exist'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const newUser = {
                            id: 1,
                            name: req.body.name,
                            email: req.body.email,
                            password: hash,
                            price_per_hour: req.body.price_per_hour
                        };

                        User.create(newUser)
                            .then(result => {
                                console.log(result.dataValues);
                                res.status(201).json({
                                    messsage: 'User created'
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    err: err
                                });
                            });
                    }
                });
            }
        })
}

exports.userLogIn = (req, res) => {
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (user === null) {
                return res.status(401).json({
                    messsage: 'Auth failed'
                });
            }

            console.log(user.dataValues);
            const userData = user.dataValues;

            bcrypt.compare(req.body.password, userData.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        messsage: 'Auth failed'
                    });
                }
                if (result) {
                    const token = jwt.sign({
                        id: userData.id,
                        name: userData.name,
                        email: userData.email,
                        pricePerHour: userData.price_per_hour
                    },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        messsage: 'Auth successful',
                        token: token
                    });
                }
                return res.status(401).json({
                    messsage: 'Auth failed'
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err: err });
        });
}

exports.userUpdate = (req, res) => {
    const id = req.params.id;
    const { password, price_per_hour } = req.body;

    if (password === null && price_per_hour !== null) { // troca somente o preco por hora
        User.update(
            { price_per_hour: price_per_hour },
            { where: { id: id } }
        )
        .then(result => {
            console.log(result.dataValues);
            res.status(201).json({
                messsage: 'User updated'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: err
            });
        });
    } else if (price_per_hour === null && password !== null) { // troca somente a senha
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            } else {
                User.update(
                    { password: hash },
                    { where: { id: id } }
                )
                .then(result => {
                    console.log(result.dataValues);
                    res.status(201).json({
                        messsage: 'User updated'
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        err: err
                    });
                });
            }
        });
    } else {
        bcrypt.hash(password, 10, (err, hash) => { // troca a senha e o preco por hora
            if (err) {
                return res.status(500).json({
                    error: err
                });
            } else {
                User.update(
                    { password: hash },
                    { price_per_hour: price_per_hour },
                    { where: { id: id } }
                )
                .then(result => {
                    console.log(result.dataValues);
                    res.status(201).json({
                        messsage: 'User updated'
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        err: err
                    });
                });
            }
        });
    }
}